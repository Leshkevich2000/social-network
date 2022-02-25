import React, { useState } from "react";
import { useEffect } from "react";

let ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);



    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {(editMode)
                ? <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}
                    />
                </div>
                : <div>
                    Status:<span onDoubleClick={activateEditMode}> {props.status || "No status!"} </span>
                </div>
            }
        </div>
    );
};


export default ProfileStatus