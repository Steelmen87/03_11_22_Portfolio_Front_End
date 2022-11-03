import React from 'react';
import s from './title.module.css'


type propsType ={
    title:string

}
const Title = ({title}:propsType) => {
    return (
        <div className={s.title}>
            {title}
        </div>
    );
};

export default Title;