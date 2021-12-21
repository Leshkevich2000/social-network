import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import StoreContext from "../../storeContecst";


let Profile = (props) => {


    return (

        <div className='content'>
            <ProfileInfo />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;