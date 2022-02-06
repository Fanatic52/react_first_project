import React, {ChangeEvent} from "react";
import style from "./ProfileInfo.module.css";
import styleOfError from "./../../common/FormsControls/FormsControls.module.css";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {ProfileType} from "../../../types/types";

const maxLength40 = maxLengthCreator(40);

type PropsType = {
    profile: ProfileType
    onMainPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, onMainPhotoSelected, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error
            ? <div className={styleOfError.formSummaryError}> {error} </div>
            : null}
        <div>
            <b>Photo</b>:<br/>
            <input
                type={"file"}
                onChange={onMainPhotoSelected}/>
        </div>
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
const ProfileDataFormWithRedux = reduxForm<ProfileType, PropsType>({
    form: 'profileData'
})(ProfileDataForm);


export default ProfileDataFormWithRedux;