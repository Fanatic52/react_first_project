import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../asserts/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let usersJSX = props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.userPhoto}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    { u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b55240d2-dadf-40c5-9304-ff4116299789"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b55240d2-dadf-40c5-9304-ff4116299789"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });

                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i);
    }
    let pagesJSX = pagesNumbers.map(p => {
        return <span className={props.currentPage === p ? styles.selectedPage : ""}
                     onClick={() => { props.onPageChangedClick(p) }}>{p}</span>
    });

    return <div>
        <div>
            {pagesJSX}
        </div>
        <div>
            {usersJSX}
        </div>
    </div>
}

export default Users;