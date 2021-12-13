import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";


let Profile = (props) => {


    return (

        <div className='content'>
            <ProfileInfo />
            <MyPosts posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;