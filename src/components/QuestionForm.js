import React, { useState } from 'react';
import './QuestionForm.css'; // Import the CSS file for QuestionForm

const QuestionForm = ({ onAddQuestion }) => {
    const [newQuestion, setNewQuestion] = useState('');

    const handleInputChange = (event) => {
        setNewQuestion(event.target.value);
    };

    const handleSubmit = () => {
        if (newQuestion.trim() !== '') {
            // Create a new question object
            const question = {
                text: newQuestion,
                upvotes: 0,
                downvotes: 0,
                comments: [],
            };

            // Call the onAddQuestion function passed from the parent component
            onAddQuestion(question);

            // Clear the input field after submitting
            setNewQuestion('');
        }
    };

    return (
        <div className="question-form"> {/* Apply question-form class */}
            <input
                type="text"
                value={newQuestion}
                onChange={handleInputChange}
                placeholder="Type your question..."
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default QuestionForm;
