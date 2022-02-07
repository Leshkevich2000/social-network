import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Friend from "./Friends/Friend";

let Navbar = (props) => {
    return (
        <nav className='nav'>
            <div className='nav__item'>
                <NavLink to={'/profile/' + props.userId}>Profile</NavLink>
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
            <div className='nav__item'>
                <NavLink to="/Friends">  Friends </NavLink>
            </div>
            <NavLink to="/users">
                <div className='nav__item'>
                    Users
                </div>
            </NavLink>
        </nav>);
}
export default Navbar;