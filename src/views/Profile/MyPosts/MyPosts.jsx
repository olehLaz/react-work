import React from 'react';
import pr from './MyPosts.module.css';
import Post from "./Post/Post";


/*
let postData = [
    {id: 1, message: 'Hi, how a you?', likesCount: 12},
    {id: 2, message: 'It s my first post', likesCount: 0},
    {id: 3, message: 't s trust post', likesCount: 5},

]
*/

const MyPosts = (props) => {
let postsElements = props.postData
    .map( p =>
        <Post message={p.message} likesCount={p.likesCount} />
        );

    return (
        <div className={pr.postsBlock}>
            My Posts
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
            <div>
                New post
            </div>
            <div className={pr.posts}>
                { postsElements }
            </div>
        </div>
    );
}
export default MyPosts;