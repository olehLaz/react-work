import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            {/*<div className={`${cl.item} ${cl.active}`}>*/}
            <div className={cl.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? cl.active : cl.item } >Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? cl.active : cl.item } >Messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? cl.active : cl.item } >News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/news">Settings</NavLink>
            </div>
            <div className={cl.item}>
                Main content
            </div>
        </nav>
    );
}
export default Navbar;