import React from "react"
import style from "./Messages.module.css"
import MessageItem from "./MessageItem/MessageItem"
import Message from "./Message/Message"
import AddMessageForm from "./MessagesForms"
import {InitialStateType} from "../../redux/reducers/messages-reducer"

type OwnPropsType = {
    messagesPage: InitialStateType
    addMessage: (messageText: string) => void
}

export type newMessageFormValuesType = {
    newMessageText: string,
}

const Messages: React.FC<OwnPropsType> = (props) => {
    let state = props.messagesPage
    console.log(state);
    let dialogsJSX =
        state.dialogs.map(dialog => <MessageItem id={dialog.id} name={dialog.name} key={dialog.id}/>)
    let messageJSX =
        state.messages.map(message => <Message message={message.message} key={message.id}/>)

    let addNewMessage = (values: newMessageFormValuesType) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsJSX}
            </div>
            <div className={style.messages}>
                {messageJSX}
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Messages