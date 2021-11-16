import React from 'react';
import pr from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <textarea></textarea>
            <button>Add Post</button>
            <div>
                New post
            </div>
            <div className={pr.posts}>
                <Post message='Hi, how a you?' />
                <Post message='It s my first post' />
                <Post message='It s trust post' />
                {/*<div className={pr.item}>post 2</div>
                    <div className={pr.item}>post 3</div>*/}
            </div>
        </div>
    );
}
export default MyPosts;