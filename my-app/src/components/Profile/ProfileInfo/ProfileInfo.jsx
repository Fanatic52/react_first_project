import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                ava + description
                <ProfileStatusWithHocks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;