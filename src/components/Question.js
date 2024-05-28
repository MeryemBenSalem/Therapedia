import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Question.css';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Button } from '@mui/material';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Question = ({ question, onVote }) => {
    const [comments, setComments] = useState([]);
    const [voted, setVoted] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [upvotes, setUpvotes] = useState(question.upvotes);
    const [downvotes, setDownvotes] = useState(question.downvotes);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch comments belonging to the question
        fetchComments(question.id);
        // Fetch user information
        fetchUser(question.userId);
    }, [question.id, question.userId]);

    const fetchComments = async (questionId) => {
        try {
            const response = await fetch(`http://localhost:8080/Comments/question/${questionId}`);
            if (response.ok) {
                const data = await response.json();
                // Sort the comments based on the difference between upvotes and downvotes
                const sortedComments = data.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
                setComments(sortedComments);
            } else {
                console.error('Failed to fetch comments');
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const fetchUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/Users/${userId}`);
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                console.error('Failed to fetch user');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        try {
            const response = await fetch('http://localhost:8080/Comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: newComment, // Use 'content' instead of 'text'
                    upvotes: 0, // Initialize upvotes to 0
                    downvotes: 0, // Initialize downvotes to 0
                    userId: 1, // Provide the user ID, replace '1' with the actual user ID
                    date: new Date().toISOString(), // Use current date and time
                    question: { id: question.id } // Provide the question ID in the format expected by the server
                }),
            });
            if (response.ok) {
                // Add the new comment to the local state
                const createdComment = await response.json();
                setComments(prevComments => [...prevComments, createdComment]);
                setNewComment('');
            } else {
                console.error('Failed to add comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };


    const handleUpvote = async () => {
        if (voted === null) {
            setUpvotes(prevUpvotes => prevUpvotes + 1);
            setVoted('up');
            onVote(question.id, 'upvote'); // Call the onVote function with question id and vote type
        }
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const handleDownvote = async () => {
        if (voted === null) {
            setDownvotes(prevDownvotes => prevDownvotes + 1);
            setVoted('down');
            onVote(question.id, 'downvote'); // Call the onVote function with question id and vote type
        }
    };

    return (
        <div className="questions-list">
            <li>
                <div className="question-avatar"><img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
                <div className="question-box">
                    <div className="question-head">
                        {user && <h6 className="question-name by-author">{user.username}</h6>}
                        {question.date && <span className="question-date">Posted on {formatDate(question.date)}</span>}
                        <Button variant={"contained"} startIcon={<ArrowDownwardRoundedIcon/>} onClick={handleDownvote}
                                disabled={voted !== null}>{downvotes}</Button>
                        <Button variant={"contained"} startIcon={<ArrowUpwardRoundedIcon/>} onClick={handleUpvote}
                                disabled={voted !== null}>{upvotes}</Button>
                    </div>
                    <div className="question-content">{question.content}</div>
                    <div className="comment-box1">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="comment-input"
                            placeholder="Add a comment..."
                        />
                        <Button startIcon={<AddBoxRoundedIcon/>} onClick={handleAddComment}
                                className="comment-button"></Button>
                    </div>
                </div>
            </li>
            <div className="comment-container">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>
        </div>
    );
};

export default Question;
