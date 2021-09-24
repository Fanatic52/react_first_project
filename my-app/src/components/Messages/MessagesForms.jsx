import {maxLengthCreator, required} from "../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);

const AddMessageComponent = (props) => {
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

const AddMessageForm = reduxForm({
    form: "messagesAddMessageForm"
})(AddMessageComponent);

export default AddMessageForm;