import React from "react";
import './MyPosts.css';
import Post from './Post/Post'

let MyPosts = () => {
    return (
        <div>
            <div className='my-posts'>
                <h3>    My posts </h3>
                <div className='new-post'>
                    <textarea></textarea>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <Post message='Hi how are you?' counterLikes='15' />
                <Post message='it is my first message!' counterLikes='19' />
                <Post />

            </div>
        </div>
    );
}

export default MyPosts;