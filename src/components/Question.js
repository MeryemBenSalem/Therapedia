import React, { useState } from 'react';
import Comment from './Comment';
import './Question.css'; // Import the CSS file
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Button } from '@mui/material';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Question = ({ question }) => {
    const [comments, setComments] = useState([]);
    const [voted, setVoted] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [upvotes, setUpvotes] = useState(question.upvotes);
    const [downvotes, setDownvotes] = useState(question.downvotes);

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        const updatedComments = [...comments, { text: newComment, upvotes: 0, downvotes: 0 }];
        setComments(updatedComments);
        setNewComment('');
    };

    const handleUpvote = () => {
        if (voted === null) {
            setUpvotes(prevUpvotes => prevUpvotes + 1);
            setVoted('up');
        }
    };

    const handleDownvote = () => {
        if (voted === null) {
            setDownvotes(prevDownvotes => prevDownvotes + 1);
            setVoted('down');
        }
    };

    return (
        <div className="questions-list">
            <li>
                <div className="question-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
                <div className="question-box">
                    <div className="question-head">
                        <h6 className="question-name by-author">test user</h6>
                        <Button variant={"contained"} startIcon={<ArrowDownwardRoundedIcon/>} onClick={handleDownvote} onClick={handleDownvote} disabled={voted !== null || downvotes > question.downvotes}>{downvotes}</Button>
                        <Button variant={"contained"} startIcon={<ArrowUpwardRoundedIcon/>} onClick={handleUpvote} onClick={handleUpvote} disabled={voted !== null || upvotes > question.upvotes}>{upvotes}</Button>
                    </div>
                    <div className="question-content">{question.text}</div>
                    <div className="comment-box1">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="comment-input"
                            placeholder="Add a comment..."
                        />
                        <Button startIcon={<AddBoxRoundedIcon/>} onClick={handleAddComment} className="comment-button"></Button>
                    </div>
                </div>
            </li>
            <div className="comment-container">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                ))}
            </div>
        </div>
    );
};

export default Question;
