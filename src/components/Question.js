import React, { useState } from 'react';
import Comment from './Comment';
import './Question.css'; // Import the CSS file

const Question = ({ question }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        const updatedComments = [...comments, { text: newComment, upvotes: 0, downvotes: 0 }];
        setComments(updatedComments);
        setNewComment('');
    };

    return (
        <div className="question-container">
            <h3 className="question-text">{question.text}</h3>
            <div className="button-container">
                <button>Upvote ({question.upvotes})</button>
                <button>Downvote ({question.downvotes})</button>
            </div>
            <div>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="comment-input"
                    placeholder="Add a comment..."
                />
                <button onClick={handleAddComment} className="comment-button">Comment</button>
            </div>
            <div className="comment-container">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default Question;
