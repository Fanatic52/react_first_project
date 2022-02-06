import React from "react";
import style from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const MessageItem: React.FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem