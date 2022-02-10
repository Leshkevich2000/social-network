import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';


let Header = (props) => {
    return (
        <header className='header'>
            <img className='header__img' src={window.location.origin + '/images/BelNetwork.png'} />
            <div className='loginBlock'>
                {props.isAuth ? <div>{props.login} <button onClick={props.logout}>logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    );
}

export default Header;