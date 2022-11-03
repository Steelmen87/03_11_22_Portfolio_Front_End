import React from 'react'
import s from './style.module.css';

type propsType = {
    component?:any
}
function TestElement({component}:propsType) {
    return (
        <div className={s.container}>
            {component}
        </div>
    )
}

export default TestElement
