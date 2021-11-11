import React, {useState} from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../asserts/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner &&
        <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        { profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>:
            <div className={style.contactsItems}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact
                        contactTitle={key}
                        contactValue={profile.contacts[key]}
                        key={key}/>
                })}
            </div>
        </div>
    </div>
}

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if(!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData)
            .then( () => setEditMode(false) );
    }

    return <div>
        <div className={style.descriptionBlock}>
            <img
                src={profile.photos.large || userPhoto}
                alt="avatar"
                className={style.mainPhoto}/>
            { editMode
                ? <ProfileDataForm
                    profile={profile}
                    initialValues={profile}
                    mainPhotoSelected={mainPhotoSelected}
                    onSubmit={onSubmit}/>
                : <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={ () => setEditMode(true) }/> }
            <ProfileStatus
                status={status}
                updateUserStatus={updateUserStatus}/>
        </div>
    </div>
}

export default ProfileInfo;