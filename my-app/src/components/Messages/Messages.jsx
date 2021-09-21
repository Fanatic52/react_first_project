import React from "react";
import MessagesCss from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    let state = props.messagePage;

    let dialogsJSX =
        state.dialogs.map(dialog => <MessageItem id={dialog.id} name={dialog.name}/>);
    let messageJSX =
        state.messages.map(message => <Message message={message.message}/>)
    let newMessageText =
        state.newMessageText;

    let onAddMessageClick = () => {
        props.addMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if(!props.isAuth) {
        return <Redirect to={"/login"} />;
    }

    return (
        <div className={MessagesCss.dialogs}>
            <div className={MessagesCss.dialogsItems}>
                {dialogsJSX}
            </div>
            <div className={MessagesCss.messages}>
                <div>
                    {messageJSX}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageText}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'>Text</textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;