import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {


    return (

        <div className='content'>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;