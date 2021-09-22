import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt="background"/>*/}
            {/*</div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                ava + description
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;