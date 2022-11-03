import React from 'react'
import s from './Home.module.css'
import img from '../../../../img/photo_500.png'
function Home() {
    return (
        <div className={s.all}>
            <div className={s.home}>
                <div className={s.myName}>Petrov Konstantin</div>
                <div className={s.myProfession}>Front - End Developer</div>
            </div>
            <img src={img} alt={'photo'} className={s.photo}/>
        </div>
    )
}

export default Home
