import React from "react";
import style from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

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
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newMessageText"
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: "messagesAddMessageForm"
})(AddMessageForm);

export default Messages;