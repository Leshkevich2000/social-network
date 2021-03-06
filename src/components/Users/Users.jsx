import React from "react";
import { NavLink } from "react-router-dom";
import { follow, unFollow } from "../../API/api";
import styles from './styles.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div className={styles.usersWraper}>
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

                                    props.unFollowTC(u.id);
                                }}>unFOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followTC(u.id);

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
                                {u.location ? u.location.city : ' ?????????? ???? ????????????'}
                            </div>
                            <div>
                                {u.location ? u.location.country : ' ???????????? ???? ??????????????'}
                            </div></span>
                    </span>
                </div>)
            }
        </div>
    </div >
    );
}
export default Users;