import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

let Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__item'>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/dialogs">  Massages </NavLink>
            </div >
            <div className='nav__item'>
                <NavLink to="/news">  News </NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/music">  Music </NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/settings">  Settings </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;