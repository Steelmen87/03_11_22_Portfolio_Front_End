import React from 'react';
import s from './Icon.module.css'

type propsType = {
    img: string
    link: string
}

const Icon = ({img, link}: propsType) => {
    return (
        <div className={s.icon}>
            <a href={link} target='_blank'>
                <img src={img} width={'45px'}/>
            </a>
        </div>
    );
};

export default Icon;