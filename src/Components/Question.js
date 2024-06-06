import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Question.css';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Button } from '@mui/material';
import poff from '../Assets/download2.jfif';

const Question = ({ question, onVote, userId }) => {
    const [comments, setComments] = useState([]);
    const [voted, setVoted] = useState(0);
    const [newComment, setNewComment] = useState('');
    const [votes, setVotes] = useState(question.votes);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchComments(question.id);
        fetchUser(question.userId);
    }, [question.id, question.userId]);

    const fetchComments = async (questionId) => {
        try {
            const response = await fetch(`http://localhost:8080/Comments/question/${questionId}`);
            if (response.ok) {
                const data = await response.json();
                const sortedComments = data.sort((a, b) => b.votes - a.votes);
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
            const response = await fetch(`http://localhost:8080/profile/${userId}`);
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

        try {
            console.log(userId , newComment , question.id);
            const response = await fetch('http://localhost:8080/Comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: newComment,
                    votes: 0,
                    userId: userId,
                    date: new Date().toISOString(),
                    question: { id: question.id }
                }),
            });
            if (response.ok) {
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
        if (voted === 0) {
            setVotes(prevVotes => prevVotes + 1);
            setVoted(1);
            onVote(question.id, 'upvote');
        } else if (voted === -1) {
            setVotes(prevVotes => prevVotes + 1);
            setVoted(0);
            onVote(question.id, 'upvote');
        }
    };

    const handleDownvote = async () => {
        if (voted === 0) {
            setVotes(prevVotes => prevVotes - 1);
            setVoted(-1);
            onVote(question.id, 'downvote');
        } else if (voted === 1) {
            setVotes(prevVotes => prevVotes - 1);
            setVoted(0);
            onVote(question.id, 'downvote');
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="questions-list">
            <li>
                <div className="question-item">
                    <div className="question-content-wrapper">
                        <div className="vote-container">
                            <Button variant="contained" onClick={handleUpvote} disabled={voted === 1}>+</Button>
                            <span className="question-score">{votes}</span>
                            <Button variant="contained" onClick={handleDownvote} disabled={voted === -1}>-</Button>
                        </div>
                        <div className="question-avatar">
                            <img src={poff} alt=""/>
                        </div>
                        <div className="question-box">
                            <div className="question-head">
                                {user && <h6 className="question-name by-author">{user.firstName}</h6>}
                                {question.date &&
                                    <span className="question-date">Posted on {formatDate(question.date)}</span>}
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
                                <Button startIcon={<AddBoxRoundedIcon/>} onClick={handleAddComment} className="comment-button"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <div className="comment-container">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default Question;
