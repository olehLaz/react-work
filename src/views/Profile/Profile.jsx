import React from 'react';
import Technologies from "../../components/Technologies/Technologies";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIeCxX7mFVg3phbJYG5Ho6dR_apaGg5wjbg&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
            <Technologies/>
        </div>
    );
}
export default Profile;