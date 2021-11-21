import React from 'react';
import pr from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
let postsElements = props.postData
    .map( p =>
        <Post message={p.message} likesCount={p.likesCount} />
        );

    let newPostElement = React.createRef();

    let addPost = () => {
       // debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
        /*let text = document.getElementById('new-post').value;*/
        /*alert('ddddddddddddddd');*/
        /*alert(text);*/
    }
    return (
        <div className={pr.postsBlock}>
            My Posts
            <div>
                {/*<textarea id='new-post'></textarea>*/}
                <textarea ref={ newPostElement } ></textarea>
            </div>
            <button onClick={ addPost }>Add Post</button>
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