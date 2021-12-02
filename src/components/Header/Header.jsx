import React from "react";
import './Header.css';


let Header = () => {
    return (
        <header className='header'>

            <img className='header__img' src={window.location.origin + '/images/BelNetwork.png'} />
        </header >
    );
}

export default Header;