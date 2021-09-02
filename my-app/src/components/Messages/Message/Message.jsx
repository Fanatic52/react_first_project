import React from "react";

const Message = (props) => {
    return (
        <div className={props.dialog}>
            {props.message}
        </div>
    )
}

export default Message