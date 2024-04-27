import React from 'react';
import './Comment.css';
import {Button} from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded"; // Import the CSS file

const Comment = ({ comment }) => {
    const handleUpvote = () => {
        // Implement upvote functionality for the comment
    };

    const handleDownvote = () => {
        // Implement downvote functionality for the comment
    };

    return (
        <ul id="comments-list" className="comments-list">
            <li>
                <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name by-author">test user</h6>
                        <Button variant={"contained"} startIcon={<ArrowDownwardRoundedIcon/>}>({comment.downvotes})</Button>
                        <Button variant={"contained"} startIcon={<ArrowUpwardRoundedIcon/>}>({comment.upvotes})</Button>
                    </div>
                    <div className="comment-content">{comment.text}</div>

                </div>
            </li>
        </ul>
    );
};

export default Comment;

