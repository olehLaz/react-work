import React from 'react';
import pr from './Post.module.css';

const Post = (props) => {
    return (
        <div className={pr.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4X8ptvFtNIOO6ZB4rY9IVojEMyazesUU0RA&usqp=CAU'/>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    );
}
export default Post;