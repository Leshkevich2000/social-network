import React from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import './MyPosts.css';
import MyPosts from './MyPosts'
import { connect } from "react-redux";




let mapStateToProps = (state) => {
    return {
        'posts': state.profilePage.posts,
        'newPostText': state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }

    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer;