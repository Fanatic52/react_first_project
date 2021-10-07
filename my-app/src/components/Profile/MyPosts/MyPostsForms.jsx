import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength10 = maxLengthCreator(10);

let AddNewPostComponent = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength10]}
                    name="newPostText"
                    placeholder="Enter your post"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostForm = reduxForm({
    form: "profileAddPostForm"
})(AddNewPostComponent);

export default AddNewPostForm;