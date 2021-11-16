import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            {/*<div className={`${cl.item} ${cl.active}`}>*/}
            <div className={cl.item}>
                <NavLink to="/profile" activeClassName={cl.active} >Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/dialogs" activeClassName={cl.active} >Messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/news" activeClassName={cl.active} >News</NavLink>
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