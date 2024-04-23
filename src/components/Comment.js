import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div>
            <p>{comment}</p>
            <div>
                <button>Upvote</button>
                <button>Downvote</button>
            </div>
        </div>
    );
};

export default Comment;