import React from "react";
import style from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem