import React from "react";
import style from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import Message from "./Message/Message";
import AddMessageForm from "./MessagesForms";

const Messages = (props) => {

    let state = props.messagePage;

    let dialogsJSX =
        state.dialogs.map(dialog => <MessageItem id={dialog.id} name={dialog.name}/>);
    let messageJSX =
        state.messages.map(message => <Message message={message.message}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsJSX}
            </div>
            <div className={style.messages}>
                <div> {messageJSX} </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Messages;