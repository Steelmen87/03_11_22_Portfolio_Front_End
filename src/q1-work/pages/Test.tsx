import React from 'react'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from '../../common/c3-SuperCheckbox/SuperCheckbox';
import s from './style.module.css';

function Test() {
    return (
        <div className={s.container}>
            <SuperInputText/>
            <SuperButton>
                default
            </SuperButton>
            <SuperCheckbox/>
        </div>
    )
}

export default Test
