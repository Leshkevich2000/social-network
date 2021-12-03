import React from "react";
import './MyPosts.css';
import Post from './Post/Post'

let postsData = [
    { message: 'Hi how are you?', counterLikes: 15 },
    { message: 'it is my first message!', counterLikes: 5 },
    { message: 'i am learning REACT', counterLikes: 100 },
]
let posts = postsData
    .map(p => <Post message={p.message} counterLikes={p.counterLikes} />)


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
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;