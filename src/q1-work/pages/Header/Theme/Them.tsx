import React from 'react';
import s from "../Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFormVisibilityAC} from '../../../../h10/bll/AppPortFolioReducer';
import {AppStoreType} from "../../../../h10/bll/store";

const Theme = () => {
    const color = useSelector<AppStoreType, string>(state => state.portfolio.themeColor)
    const dispatch = useDispatch()
    const handleClickDark = () => {
        dispatch(setFormVisibilityAC('#333333'))

    }
    const handleClickWhite = () => {
        dispatch(setFormVisibilityAC('white'))
    }

    return (
        <div>
            <div
                onClick={handleClickDark}
                className={`${s.theme_Dark}`}>
                Dark  |</div>
            <div
                onClick={handleClickWhite}
                className={`${s.theme_white}`}>
                White
            </div>
        </div>
    );
};

export default Theme;