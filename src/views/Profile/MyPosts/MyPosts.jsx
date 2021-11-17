import React from 'react';
import pr from './MyPosts.module.css';
import Post from "./Post/Post";


let postData = [
    {id: 1, message: 'Hi, how a you?', likesCount: 12},
    {id: 2, message: 'It s my first post', likesCount: 0},
    {id: 3, message: 't s trust post', likesCount: 5},

]

let postsElements = postData
    .map( p =>
        <Post message={p.message} likesCount={p.likesCount} />
        );



const MyPosts = () => {
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

                {/*<Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />
                */}

                {/*<Post message='Hi, how a you?'/>
                <Post message='It s my first post'/>
                <Post message='It s trust post'/>*/}

                {/*<div className={pr.item}>post 2</div>
                    <div className={pr.item}>post 3</div>*/}
            </div>
        </div>
    );
}
export default MyPosts;