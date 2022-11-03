import React from 'react'
import Title from "../Title/Title";
import s from './Contacts.module.css'
import Icon from "./Icon/Icon";
import linkedin from '../../../img/contacts/Group 2.png'
import telegram from '../../../img/contacts/telegram (2).png'
import Group from '../../../img/contacts/Group 8.png'
import WhatsApp from '../../../img/contacts/whatsapp-logo_icon-icons.com_57054.png'
import ContactForm from "../../../netlify/functions/send-emails";

function Contacts() {


    return (
        <div className={s.container}>
            <Title title={'Contacts'}/>
            <div className={s.welcome}>
                Want to know more or just chat?
                You are welcome!
            </div>
            <ContactForm/>
            <div className={s.group_icon}>
                <Icon img={linkedin} link={'https://linkedin.com/in/konstantin-petrov-028362223'}/>
                <Icon img={telegram} link={'https://t.me/Konstantin_2100'}/>
                <Icon img={Group} link={'https://instagram.com/konstantin_ru_tu_tu?igshid=YmMyMTA2M2Y='}/>
                <Icon img={WhatsApp} link={'https://wa.me/qr/OVO3AE4U7B4WL1'}/>
            </div>
            <div className={s.like}>
                Like me on LinkedIn, Instagram, Telegram, WhatsApp
            </div>
        </div>


    )
}

export default Contacts
