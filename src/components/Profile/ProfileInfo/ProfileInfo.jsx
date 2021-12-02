import React from "react";
import './ProfileInfo.css';


let ProfileInfo = () => {
    return (
        <div className='ProfileInfo'>
            <div>
                {<img src='https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480'></img>}
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;