import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    editMode: boolean
    status: string
    updateUserStatus: (newStatus: string) => void
}

const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>
                    <b>Status</b>: {props.status || "====="}
                </span>
            </div>}
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
            </div>}
        </div>
    );
}

export default ProfileStatus;