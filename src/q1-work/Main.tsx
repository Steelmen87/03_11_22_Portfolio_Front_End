import React from 'react'
import {HashRouter} from 'react-router-dom'
import HeaderMobile from './pages/HeaderMobile/HeaderMobile'
import Pages from './Pages'
import Header from "./pages/Header/Header";
import Border from "./pages/Header/NamePage/Border/Border";

function Main() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Border/>
                <HeaderMobile/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default Main
