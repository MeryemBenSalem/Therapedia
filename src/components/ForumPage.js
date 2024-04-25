import React, { useState } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';
import './ForumPage.css';

const ForumPage = () => {
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    // Function to calculate the total score (upvotes minus downvotes) of a question
    const calculateTotalScore = (question) => {
        return question.upvotes - question.downvotes;
    };

    // Sort the questions based on total score
    const sortedQuestions = questions.slice().sort((a, b) => {
        return calculateTotalScore(b) - calculateTotalScore(a);
    });

    return (
        <div className="container"> {/* Apply container class */}
            <h1>Forum</h1>
            <QuestionForm onAddQuestion={handleAddQuestion} />
            <div className="question-list"> {/* Apply question-list class */}
                {sortedQuestions.map((question, index) => (
                    <Question key={index} question={question} />
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
