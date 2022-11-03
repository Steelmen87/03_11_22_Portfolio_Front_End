import React, {useEffect} from 'react';
import './App.css';
import Main from "../../../q1-work/Main";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store";

function App() {
    let color = useSelector<AppStoreType, string>(state => state.portfolio.themeColor)

    useEffect(() => {
        document.body.style.background = color;
    }, [color]);

    return (
        <div>
            <Main/>
        </div>
    );
}

export default App;
