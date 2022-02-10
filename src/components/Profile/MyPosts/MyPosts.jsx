import React from "react";
import './MyPosts.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreater, required } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormControls";

let maxLength10 = maxLengthCreater(10);
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={TextArea} validate={[required, maxLength10]} placeholder={'write a post'} />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    );
};
const NewPostForm = reduxForm({
    form: 'ProfileAddNewPost'
})(PostForm);



const MyPosts = (props) => {
    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    return (
        <div>
            <div className='my-posts'>
                <h3>    My posts </h3>
                <div className='new-post'>
                    <NewPostForm onSubmit={onAddPost} />
                </div>
                <div>
                    {props.posts}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;