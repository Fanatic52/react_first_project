import React from "react";
import DialogItemCss from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={DialogItemCss.dialog + " " + DialogItemCss.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

export default MessageItem