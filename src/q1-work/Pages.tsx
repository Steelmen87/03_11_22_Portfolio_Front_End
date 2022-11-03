import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from './pages/Error404';
import Contacts from './pages/Contacts/Contacts';
import AboutMe from "./pages/AboutMe/AboutMe";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills/Skills";
import Home from "./pages/Header/Home/Home";
import TestElement from "./pages/TestElement";
import {BorderTest} from "./pages/Component_for_Test/BorderTest";

export const PATH = {
    HOME: '/home',
    ABOUT_ME: '/about-me',
    PROFILE: '/profile',
    SKILLS: '/skills',
    CONTACTS: '/contacts',
    SEND_MESSAGE: '/send-message',
    TEST: '/test'
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={PATH.TEST} element={<TestElement component={<BorderTest/>}/>}/>
                <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ABOUT_ME} element={<AboutMe/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
