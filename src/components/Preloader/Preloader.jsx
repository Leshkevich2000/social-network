import React from "react";
import preloader from './../../images/preloader.gif';

let Preloader = () => {
    return (
        <div style={{ backgroundColor: 'transparet' }}>
            <img src={preloader} />
        </div>
    );
}
export default Preloader;