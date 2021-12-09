import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {


    return (

        <div className='content'>
            <ProfileInfo />
            <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;