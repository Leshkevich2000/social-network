import React from "react";
import Preloader from "../../Preloader/Preloader";
import './ProfileInfo.css';


let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className='ProfileInfo'>
                <div>
                    {<img src='https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480'></img>}
                </div>
                <div>
                    <img src={props.profile.photos.large} />
                    ava + description <br></br>
                    {props.profile.fullName}
                </div>
            </div>
        );
    }
}
export default ProfileInfo;