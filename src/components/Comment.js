import React from 'react';
import './Comment.css'; // Import the CSS file

const Comment = ({ comment }) => {
    const handleUpvote = () => {
        // Implement upvote functionality for the comment
    };

    const handleDownvote = () => {
        // Implement downvote functionality for the comment
    };

    return (
        <div className="comment-container">
            <p className="comment-text">{comment.text}</p>
            <div className="button-container">
                <button onClick={handleUpvote}>Upvote ({comment.upvotes})</button>
                <button onClick={handleDownvote}>Downvote ({comment.downvotes})</button>
            </div>
        </div>
    );
};

export default Comment;
