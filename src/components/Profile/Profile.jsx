import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";



let Profile = (props) => {


    return (

        <div className='content'>
            <ProfileInfo />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;