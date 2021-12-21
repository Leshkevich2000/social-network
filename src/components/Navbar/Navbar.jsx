import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Friend from "./Friends/Friend";
import StoreContext from "../../storeContecst";

let Navbar = (props) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let friends = store.getState().sidebar.map(f => <Friend name={f.name} lastName={f.lastName} image={f.image} />);
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
                            <div className='nav__item'>
                                <NavLink to="/Friends">  Friends</NavLink>
                                {friends}
                            </div>
                        </nav>);
                }
            }
        </StoreContext.Consumer>

    );
}

export default Navbar;