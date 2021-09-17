import React from 'react';
import ProfileInfoCss from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt="background"/>
            </div>
            <div className={ProfileInfoCss.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;