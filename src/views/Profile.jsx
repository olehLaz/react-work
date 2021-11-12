import React from 'react';
import pr from './Profile.module.css';
import Technologies from "./Technologies";

const Profile = () => {
    return (
        <div className={pr.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIeCxX7mFVg3phbJYG5Ho6dR_apaGg5wjbg&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className={pr.item}>post 1</div>
                    <div className={pr.item}>post 2</div>
                    <div className={pr.item}>post 3</div>
                </div>
            </div>
            <Technologies/>
        </div>
    );
}
export default Profile;