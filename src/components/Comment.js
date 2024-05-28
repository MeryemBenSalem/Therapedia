import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Button } from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Comment = ({ comment, onUpvote, onDownvote }) => {
    const [voted, setVoted] = useState(null);
    const [upvotes, setUpvotes] = useState(comment.upvotes);
    const [downvotes, setDownvotes] = useState(comment.downvotes);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(comment.userId);
    }, [comment.userId]);

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

    const handleUpvote = async () => {
        if (voted === null) {
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/upvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to upvote comment');
                }
                setUpvotes(prevUpvotes => prevUpvotes + 1);
                setVoted('up');
                onUpvote();
            } catch (error) {
                console.error('Error upvoting comment:', error);
            }
        }
    };

    const handleDownvote = async () => {
        if (voted === null) {
            try {
                const response = await fetch(`http://localhost:8080/Comments/${comment.id}/downvote`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Failed to downvote comment');
                }
                setDownvotes(prevDownvotes => prevDownvotes + 1);
                setVoted('down');
                onDownvote();
            } catch (error) {
                console.error('Error downvoting comment:', error);
            }
        }
    };

    // Function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <ul id="comments-list" className="comments-list">
            <li>
                <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name by-author">{user ? user.username : 'Anonymous'}</h6>
                        <Button variant={"contained"} startIcon={<ArrowDownwardRoundedIcon />} onClick={handleDownvote} disabled={voted !== null || downvotes > comment.downvotes}>{downvotes}</Button>
                        <Button variant={"contained"} startIcon={<ArrowUpwardRoundedIcon />} onClick={handleUpvote} disabled={voted !== null || upvotes > comment.upvotes}>{upvotes}</Button>
                    </div>
                    <div className="comment-content">{comment.content || 'No content'}</div>
                    <div className="comment-date">Posted on {formatDate(comment.date)}</div>
                </div>
            </li>
        </ul>
    );
};

export default Comment;
