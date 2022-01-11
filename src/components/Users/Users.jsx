import React from "react";
import styles from './styles.module.css';
import * as axios from 'axios'
let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
            });
        }
    }
    debugger;
    return (
        <div>
            <button onClick={getUsers}>Get Uesrs</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <br></br>
                            <br></br>
                            <img src={u.photos.small != null ? u.photos.small : window.location.origin + '/images/userPhoto.jpg'} className={styles.userPhoto}></img>

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.follow(u.id)}>unFOLLOW</button>
                                : <button onClick={() => props.unFollow(u.id)}>FOLLOW</button>}

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
        </div>
    );
}



export default Users;
