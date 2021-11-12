import React from 'react';
import cl from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className= {`${cl.item} ${cl.active}`}><a>Profile</a></div>
            <div className={cl.item}>Messages</div>
            <div className={cl.item}>News</div>
            <div className={cl.item}>Settings</div>
            <div className={cl.item}>Main content</div>
        </nav>
    );
}
export default Navbar;