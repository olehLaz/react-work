import React from 'react';
import he from './Header.module.css';

const Header = () => {
    return (
        /* <div className="App">*/
        <header className={he.header}>
            <img
                src='https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg'/>
            <a href='#s'>Home </a> -
            <a href='#s'>News Feed </a> -
            <a href='#s'>Message </a> -
        </header>

        /*</div>*/
    );
}
export default Header;