import React from 'react';
import s from './NamePage.module.css'
type propsType ={
    name:string
}
const NamePage = ({name}:propsType) => {
    return (
        <div className={s.decor}>
            {name}
        </div>
    );
};

export default NamePage;