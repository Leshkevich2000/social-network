import React from "react";
import { NavLink } from "react-router-dom";
import { follow, unFollow } from "../../API/api";
import styles from './styles.module.css';
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }} >{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id} >
                            <br></br>
                            <br></br>
                            <img src={u.photos.small != null ? u.photos.small : window.location.origin + '/images/userPhoto.jpg'} className={styles.userPhoto}></img>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                unFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unFollow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });

                            }}>unFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                follow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });

                            }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location ? u.location.city : ' город не указан'}
                        </div>
                        <div>
                            {u.location ? u.location.country : ' страна не указана'}
                        </div></span>
                </span>
            </div>)
        }
    </div >
    );
}
export default Users;