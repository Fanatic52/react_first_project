import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../asserts/images/user.png";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                {/*AVATAR*/}
                <img
                    src={profile.photos.large || userPhoto}
                    alt="avatar"
                    className={style.mainPhoto}/>
                {/*IF IS IT OWNER SHOW INPUT_FILE FOR CHANGE AVATAR*/}
                {isOwner &&
                <input
                    type={"file"}
                    onChange={mainPhotoSelected}/>}
                {/*PROFILE_STATUS*/}
                <ProfileStatus
                    status={status}
                    updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;