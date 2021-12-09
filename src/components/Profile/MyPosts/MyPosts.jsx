import React from "react";
import { addPost } from "../../../redux/state";
import './MyPosts.css';
import Post from './Post/Post'



let MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.message} counterLikes={p.counterLikes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className='my-posts'>
                <h3>    My posts </h3>
                <div className='new-post'>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                    <div>
                        <button onClick={addPost} >Add Post</button>
                    </div>
                </div>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;