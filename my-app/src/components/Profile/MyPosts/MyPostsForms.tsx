import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);

type PropsType = {

}

export type AddPostFormValuesType = {
    newPostText: string
}

let AddNewPostComponent: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
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

let AddNewPostForm = reduxForm<AddPostFormValuesType, PropsType>({
    form: "profileAddPostForm"
})(AddNewPostComponent);

export default AddNewPostForm;