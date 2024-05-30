import React from 'react';
import classes from '/styles/Post.module.css';

const Post = ({ post }) => {
    console.log(post);
    return (
        <>
            <h1 className={classes.title}>포스트</h1>
            <div className={classes.post}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        </>
    );
};

export default Post;
