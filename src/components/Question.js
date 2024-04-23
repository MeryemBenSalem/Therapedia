// Question.js
import React, { useState } from 'react';
import Comment from './Comment';

const Question = ({ question }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div>
            <h3>{question.text}</h3>
            <div>
                <button>Upvote ({question.upvotes})</button>
                <button>Downvote ({question.downvotes})</button>
            </div>
            <div>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button onClick={handleAddComment}>Comment</button>
            </div>
            {question.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    );
};

export default Question;
