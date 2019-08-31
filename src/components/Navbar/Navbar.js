import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to="/Profile" activeClassName={s.activeLink}> Profile</NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/Dialogs" activeClassName={s.activeLink}> Message</NavLink>
                </div>
                <div className={s.item}>
                    <a href='/news'>News</a>
                </div>
                <div className={s.item}>
                    <a href='/music'>Music</a>
                </div>
                <div className={s.item}>
                    <a href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;