// ForumPage.js

import React, { useState } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';
import './ForumPage.css';

const ForumPage = () => {
    const [questions, setQuestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
        closeModal();
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

    const calculateTotalScore = (question) => {
        return question.upvotes - question.downvotes;
    };

    const sortedQuestions = questions.slice().sort((a, b) => {
        return calculateTotalScore(b) - calculateTotalScore(a);
    });

    return (
        <div className="container">
            <h1>Welcome to our Forum page</h1>
            <button onClick={openModal}>Add Question</button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={toggleModal}>&times;</span> {/* Close button (X) */}
                <QuestionForm onAddQuestion={handleAddQuestion} />
            </div>
        </div>
    )}
            <div className="question-list">
                {sortedQuestions.map((question, index) => (
                    <Question key={index} question={question} />
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
