import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../asserts/images/user.png";
import {NavLink} from "react-router-dom";

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
                        ? <button onClick={() => props.unfollow(u.id) }>Unfollow</button>
                        : <button onClick={() => props.follow(u.id) }>Follow</button>
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