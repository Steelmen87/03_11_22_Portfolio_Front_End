import React from 'react'
import Title from "../Title/Title";
import s from './AboutMe.module.css'
import img from '../../../img/aboutMe.png'
import download from '../../../img/download.png'
import cv from '../../../img/MiniCV.png'
//@ts-ignore
import pdf from '../../../document/Petrov_Konstantin.pdf'

function AboutMe() {
    return (
        <div className={s.container}>
            <div className={s.information}>
                <Title title={'About me'}/>
                <div>
                    <p>Hello, I am a person who has a strong passion for programming. I have
                        experience creating a SPA using React/Redux/TypeScript. Now I am improving
                        my skills in this direction and expanding them with the help of new
                        technologies such as react native. I spend my free time improving my English
                        and solving problems on Codewars. I am open to your suggestions.
                    </p>
                </div>
                <a target="_blank" href={pdf} download={'Petrov_Konstantin_CV'}>
                    <img
                        className={s.download}
                        src={download}
                        alt='download'
                        width={'100px'}/>
                </a>
                <a target="_blank" href={pdf} download={'Petrov_Konstantin_CV'}>
                    <img src={cv} alt={'cv'} width={'200px'}/>
                </a>
            </div>
            <div>
                <img src={img} alt={'photo'} className={s.photo}/>
            </div>
        </div>
    )
}

export default AboutMe
