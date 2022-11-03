import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../Pages";
import style from '../style.module.css'

function HeaderMobile() {
    return (
        <div>
            <input type="checkbox" id="hmt" className={style["hidden-menu-ticker"]}/>
            <label className={style["btn-menu"]} htmlFor="hmt">
                <span className={style.first}/>
                <span className={style.second}/>
                <span className={style.third}/>
            </label>
            <ul className={style["hidden-menu"]}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={PATH.ABOUT_ME}>About Me</NavLink></li>
                <li><NavLink to={PATH.PROFILE}>Profile</NavLink></li>
                <li><NavLink to={PATH.SKILLS}>Skills</NavLink></li>
                <li><NavLink to={PATH.CONTACTS}>Contacts</NavLink></li>
                <li><NavLink to={PATH.TEST}>TEST</NavLink></li>

            </ul>
        </div>
    )
}

export default HeaderMobile
