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
        //учитывая что дынные сидят в state мы
        // можем их брать от туда
        //нет смысла отправлять этот текст
       // let text = newPostElement.current.value;
        // props.addPost(text);
        props.addPost();
        /*newPostElement.current.value='';*/
        /*let text = document.getElementById('new-post').value;*/
        /*alert('ddddddddddddddd');*/
        /*alert(text);*/
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /*console.log(text);*/
        props.updateNewPostText(text);
    }

    return (
        <div className={pr.postsBlock}>
            My Posts
            <div>
                {/*<textarea id='new-post'></textarea>*/}
                <textarea
                    onChange={onPostChange}
                    ref={ newPostElement }
                    /*value="value-passing"*/
                    value={ props.newPostText }
                />
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