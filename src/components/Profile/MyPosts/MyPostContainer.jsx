import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import './MyPosts.css';
import MyPosts from './MyPosts'
import { connect } from "react-redux";
import Post from './Post/Post'




let mapStateToProps = (state) => {
    let posts = state.profilePage.posts.map(p => <Post message={p.message} counterLikes={p.counterLikes} />);
    return {
        'posts': posts
    }
};



const MyPostContainer = connect(mapStateToProps, { addPost: addPostActionCreator })(MyPosts);


export default MyPostContainer;