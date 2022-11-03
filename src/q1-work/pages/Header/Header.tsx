import React from 'react';
import s from './Header.module.css'
import NamePage from "./NamePage/NamePage";
import {NavLink} from "react-router-dom";
import {PATH} from "../../Pages";
import Theme from "./Theme/Them";

const Header = () => {
    return (
        <div className={s.container}>
            <li><NavLink to={'/'}><NamePage name={'Home'}/></NavLink></li>
            <li><NavLink to={PATH.ABOUT_ME}><NamePage name={'About Me'}/></NavLink></li>
            <li><NavLink to={PATH.PROFILE}><NamePage name={'Portfolio'}/></NavLink></li>
            <li><NavLink to={PATH.SKILLS}><NamePage name={'Skills'}/></NavLink></li>
            <li><NavLink to={PATH.CONTACTS}><NamePage name={'Contacts'}/></NavLink></li>
            <Theme/>
        </div>
    );
};

export default Header;