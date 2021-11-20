import React from 'react';
import Technologies from "../../components/Technologies/Technologies";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {



    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData}
                     addPost={props.addPost}
            />
            <Technologies/>
        </div>
    );
}
export default Profile;