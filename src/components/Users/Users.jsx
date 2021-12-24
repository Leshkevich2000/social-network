import React from "react";
import { unFollowAC } from "../../redux/usersReducer";
import styles from './styles.module.css'

let Users = (props) => {
    if (props.users.length == 0) {
        console.log("000");
        props.setUsers([
            {
                id: 1, photoUrl: 'https://citaty.info/files/characters/32246.jpg',
                followed: true,
                name: 'Alex',
                status: 'I am a BOSS!',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://icdn.lenta.ru/images/2021/06/25/18/20210625185420818/square_320_793279a1f6e1ac09c096977444165467.jpg',
                followed: false,
                name: 'Fedor',
                status: 'I am a BOSS!',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
                followed: true,
                name: 'Vladimir',
                status: 'I am a BOSS!',
                location: { city: 'Kiev', country: 'Ukaine' }
            },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}></img>
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
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div></span>
                    </span>
                </div>)
            }
        </div>
    );
}



export default Users;
