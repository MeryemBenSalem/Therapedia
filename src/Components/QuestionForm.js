import React, { useState } from 'react';
import './QuestionForm.css';

const QuestionForm = ({ onAddQuestion, userId }) => {
    const [newQuestion, setNewQuestion] = useState('');

    const handleInputChange = (event) => {
        setNewQuestion(event.target.value);
    };

    const handleSubmit = () => {
        if (newQuestion.trim() !== '') {
            const question = {
                content: newQuestion,
                votes: 0,
                comments: [],
                userId: userId, // include userId in the question object
            };
            onAddQuestion(question);
            setNewQuestion('');
        }
    };

    return (
        <div className="question-form">
            <input
                type="text"
                value={newQuestion}
                onChange={handleInputChange}
                placeholder="Express yourself..."
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default QuestionForm;
