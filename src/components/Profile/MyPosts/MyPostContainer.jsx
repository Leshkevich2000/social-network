import React from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import './MyPosts.css';
import MyPosts from './MyPosts'
import StoreContext from "../../../storeContecst";




let MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts posts={state.profilePage.posts} addPost={addPost} updateNewPostText={onPostChange}
                            newPostText={state.profilePage.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;