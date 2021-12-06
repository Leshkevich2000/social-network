import React from "react";
import './MyPosts.css';
import Post from './Post/Post'



let MyPosts = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} counterLikes={p.counterLikes} />)

    debugger;
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