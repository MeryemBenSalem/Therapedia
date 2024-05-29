// ForumPage.js

import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';
import './ForumPage.css';

const ForumPage = () => {
    const [questions, setQuestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://localhost:8080/Question');
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const data = await response.json();
            // Sort the questions based on the number of votes in descending order
            const sortedQuestions = data.sort((a, b) => b.votes - a.votes);
            setQuestions(sortedQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const addQuestion = async (questionData) => {
        try {
            const response = await fetch('http://localhost:8080/Question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...questionData,
                    date: new Date().toISOString(),
                    userId: 2,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add question');
            }
            fetchQuestions();
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    const voteQuestion = async (questionId, voteType) => {
        try {
            const response = await fetch(`http://localhost:8080/Question/${questionId}/${voteType}`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error(`Failed to ${voteType} question`);
            }
        } catch (error) {
            console.error(`Error ${voteType}ing question:`, error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className="container">
            <div className="header">
                <h1>Welcome to our Forum page</h1>
                <button className="add-question" onClick={openModal}>Share your thoughts!</button>
            </div>
            <div className="for-not">
            <div className="forum">
                {isModalOpen && (
                    <div className="modal-overlay" onClick={toggleModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={toggleModal}>&times;</span>
                            <QuestionForm onAddQuestion={addQuestion}/>
                        </div>
                    </div>
                )}
                <div className="question-list">
                    {questions.map((question, index) => (
                        <Question key={index} question={question} onVote={voteQuestion}/>
                    ))}
                </div>
            </div>
            <div className="notifications">
                <h2>Notifications</h2>

            </div>
            </div>
        </div>

    );
};

export default ForumPage;
