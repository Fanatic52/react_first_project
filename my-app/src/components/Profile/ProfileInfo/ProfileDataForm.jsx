import React from "react";
import style from "./ProfileInfo.module.css";
import styleOfError from "./../../common/FormsControls/FormsControls.module.css";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength40 = maxLengthCreator(40);

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error
            ? <div className={styleOfError.formSummaryError}> {error} </div>
            : null}
        <div>
            <b>Full name</b>:
            <Field
                component={Input}
                validate={[required, maxLength40]}
                placeholder={"Full name"}
                name={"fullName"}/>
        </div>
        <div>
            <b>Looking for a job</b>:
            <Field
                component={Input}
                type={"checkbox"}
                name={"lookingForAJob"}/>
        </div>
        <div>
            <b>My professional skills</b>:
            <Field
                component={Textarea}
                placeholder={"My professional skills"}
                name={"lookingForAJobDescription"}/>
        </div>
        <div>
            <b>About me</b>:
            <Field
                component={Textarea}
                placeholder={"About me"}
                name={"aboutMe"}/>
        </div>
        <div>
            <b>Contacts</b>:
            <div className={style.contactsItems}>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}</b>:
                        <Field
                            component={Input}
                            placeholder={key}
                            name={"contacts." + key}/>
                    </div>
                })}
            </div>
        </div>
    </form>
}
const ProfileDataFormWithRedux = reduxForm({
    form: 'profileData'
})(ProfileDataForm);


export default ProfileDataFormWithRedux;