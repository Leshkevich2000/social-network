import React from "react";
import Preloader from "../../Preloader/Preloader";
import './ProfileInfo.css';
import ProfileStatus from './ProfileStatus';
import ProfileContacts from './ProfileContacts';
import ProfileLookingForJob from "./ProfileLookingForJob";

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className='ProfileInfo'>
                <div className="ProfileInfo-wraper">
                    <div>
                        <img src={(props.profile.photos.large != null)
                            ? props.profile.photos.large
                            : window.location.origin + '/images/no_avatar.png'} />
                        <br></br>

                    </div>
                    <div>
                        <br></br>
                        <h3 className="FullName"> {props.profile.fullName} </h3>
                        <p> ava + description</p>
                        <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
                        <ProfileContacts contacts={props.profile.contacts} />
                        <ProfileLookingForJob props={props.profile} />
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileInfo;