import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Button } from "@mui/material";
import prof from "../Assets/download2.jfif"
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Comment = ({ comment, onVote}) => {
    const [voted, setVoted] = useState(0);
    const [votes, setVotes] = useState(comment.votes);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(comment.userId);
    }, [comment.userId]);

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

    const handleUpvote = async () => {
        if (voted === 0) {
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/upvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to upvote comment');
                }
                setVotes(prevVotes => prevVotes + 1);
                setVoted(1);

            } catch (error) {
                console.error('Error upvoting comment:', error);
            }
        }
        else if (voted ===-1){
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/upvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to upvote comment');
                }
                setVotes(prevVotes => prevVotes + 1);
                setVoted(0);

            } catch (error) {
                console.error('Error upvoting comment:', error);
            }

        }
    };

    const handleDownvote = async () => {
        if (voted === 0) {
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/downvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to downvote comment');
                }
                setVotes(prevVotes => prevVotes - 1);
                setVoted(-1);

            } catch (error) {
                console.error('Error downvoting comment:', error);
            }
        }
        else if (voted ===1){
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/downvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to downvote comment');
                }
                setVotes(prevVotes => prevVotes - 1);
                setVoted(0);

            } catch (error) {
                console.error('Error downvoting comment:', error);
            }

        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    return (
        <ul id="comments-list" className="comments-list">
            <li className="comment-item">
                <div className="vote-buttons">
                    <Button variant={"contained"} onClick={handleUpvote} disabled={voted === 1}>+</Button>
                    <span className="question-score">{votes}</span>
                    <Button variant={"contained"} onClick={handleDownvote} disabled={voted === -1}>-</Button>
                </div>
                <div className="comment-content-wrapper">
                    <div className="comment-avatar"><img src={prof} alt=""/></div>
                    <div className="comment-box">
                        <div className="comment-head">
                            <h6 className="comment-name by-author">{user ? user.firstName : 'Anonymous'}</h6>
                            <div className="comment-date">Posted on {formatDate(comment.date)}</div>
                        </div>
                        <div className="comment-content">{comment.content || 'No content'}</div>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default Comment;
