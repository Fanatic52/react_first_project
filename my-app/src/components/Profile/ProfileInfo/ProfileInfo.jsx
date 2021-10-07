import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if(!profile) {
        return <Preloader />
    }
    //todo process a situation when photo is null
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large} alt="avatar"/>
                ava + description
                <ProfileStatusWithHocks
                    status={status}
                    updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;