import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import React from "react";
import {newMessageFormValuesType} from "./Messages";

const maxLength50 = maxLengthCreator(50);

type PropsType = {}

const AddMessageComponent: React.FC<InjectedFormProps<newMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageText"
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<newMessageFormValuesType>({form: "messagesAddMessageForm"})(AddMessageComponent)