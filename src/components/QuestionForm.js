// ForumPage.js
import React, { useState } from 'react';
import Question from './Question';

const ForumPage = () => {
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    return (
        <div>
            <h1>Forum</h1>
            <QuestionForm onAddQuestion={handleAddQuestion} />
            {questions.map((question, index) => (
                <Question key={index} question={question} />
            ))}
        </div>
    );
};

export default ForumPage;
