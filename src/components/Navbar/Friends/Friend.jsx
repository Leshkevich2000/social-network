import React from "react";
import './../../Profile/MyPosts/Post/Post.css';

let Friend = (props) => {
    return (
        <div>
            <div className='posts'>
                <div className='post'>
                    <img className='post__avatar' src={props.image}></img>
                    <p></p>
                    {props.name}
                </div>
            </div>

        </div>
    );
}

export default Friend;