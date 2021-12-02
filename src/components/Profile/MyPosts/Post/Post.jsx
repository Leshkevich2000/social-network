import React from "react";
import './Post.css';

let Post = (props) => {
    return (
        <div>
            <div className='posts'>
                <div className='post'>
                    <img className='post__avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mr._Bean_2011.jpg/280px-Mr._Bean_2011.jpg'></img>
                    {props.message}
                </div>
                <span>{props.counterLikes + ' Likes'}</span>
            </div>

        </div>
    );
}

export default Post;