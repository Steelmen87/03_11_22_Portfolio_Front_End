import React from 'react';
import s from './Skills.module.css'
type propsType = {
    title: string
    img: string
}
const SkillsTitle = ({title, img}: propsType) => {
    return (
        <div className={s. container}>
            <img src={img} alt={'skill'} width={'120px'}/>
            <div className={s.title}>{title}</div>
        </div>
    );
};

export default SkillsTitle;