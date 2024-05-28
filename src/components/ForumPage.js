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
            // Sort the questions based on the number of upvotes in descending order
            const sortedQuestions = data.sort((a, b) => b.upvotes - a.upvotes);
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
                    date: new Date().toISOString(), // Add the current date
                    userId: 2, // Provide the actual user ID
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add question');
            }
            fetchQuestions(); // Refresh the list of questions after adding a new one
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };



    const voteQuestion = async (questionId, voteType) => {
        try {
            const response = await fetch(`http://localhost:8080/Question/${questionId}/${voteType}`, {
                method: 'PUT', // or PATCH
            });
            if (!response.ok) {
                throw new Error(`Failed to ${voteType} question`);
            }
            fetchQuestions(); // Refresh the list of questions after voting
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
            <h1>Welcome to our Forum page</h1>
            <button onClick={openModal}>Add Question</button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <QuestionForm onAddQuestion={addQuestion} />
                    </div>
                </div>
            )}
            <div className="question-list">
                {questions.map((question, index) => (
                    <Question key={index} question={question} onVote={voteQuestion} />
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
