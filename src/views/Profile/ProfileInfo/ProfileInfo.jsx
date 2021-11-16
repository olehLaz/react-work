import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIeCxX7mFVg3phbJYG5Ho6dR_apaGg5wjbg&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;