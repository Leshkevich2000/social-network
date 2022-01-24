import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';


let Header = (props) => {
    return (
        <header className='header'>
            <img className='header__img' src={window.location.origin + '/images/BelNetwork.png'} />
            <div className='loginBlock'>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    );
}

export default Header;