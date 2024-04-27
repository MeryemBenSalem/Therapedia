import React, { useState } from 'react';
import Comment from './Comment';
import './Question.css'; // Import the CSS file
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Button }from '@mui/material'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
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
        <div className="questions-list">
            <li>
                <div className="question-avatar"><img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
                <div className="question-box">
                    <div className="question-head">
                        <h6 className="question-name by-author">test user</h6>
                        <Button variant={"contained"}
                                startIcon={<ArrowDownwardRoundedIcon/>}>({question.downvotes})</Button>
                        <Button variant={"contained"}
                                startIcon={<ArrowUpwardRoundedIcon/>}>({question.upvotes})</Button>
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
                        <Button startIcon={<AddBoxRoundedIcon/>} onClick={handleAddComment}
                                className="comment-button"></Button>
                    </div>

                </div>


            </li>
            <div className="comment-container">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                ))}
            </div>
        </div>
    )
        ;
};

export default Question;
