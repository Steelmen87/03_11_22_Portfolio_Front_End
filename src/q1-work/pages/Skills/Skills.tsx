import React from 'react'
import Title from "../Title/Title";
import SkillsTitle from "./SkillsTitle";
import react from '../../../img/react_icon.png'
import redux from '../../../img/redux_original_logo_icon.png'
import typeScript from '../../../img/file_type_typescript.png'
import javaScript from '../../../img/javascript_icon.png'
import material from '../../../img/material_ui_icon.png'
import axios from '../../../img/axios_logo_icon_168546.png'
import sass from '../../../img/sass_original_logo_icon_146350.png'
import postMan from '../../../img/postman_alt_macos_bigsur_icon_189814.png'
import story from '../../../img/file_type_storybook_icon_130145.png'
import git from '../../../img/file_type_git_icon_130581.png'
import html from '../../../img/free-icon-html-5.png'
import css from '../../../img/free-icon-css.png'
import unitTest from '../../../img/unit.png'
import softSkills from '../../../img/soft-skills.png'
import s from './Skills.module.css'

function Skills() {
    return (
        <div className={s.container}>
            <div>
                <Title title={'Skills'}/>
            </div>
            <div className={s.subtitle}>I work in such instruments as</div>
            <div className={s.skills}>
                <SkillsTitle title={'React'} img={react}/>
                <SkillsTitle title={'Redux'} img={redux}/>
                <SkillsTitle title={'TypeScript'} img={typeScript}/>
                <SkillsTitle title={'JavaScript'} img={javaScript}/>
                <SkillsTitle title={'Material UI'} img={material}/>
                <SkillsTitle title={'Axios'} img={axios}/>
                <SkillsTitle title={'UnitTest'} img={unitTest}/>
                <SkillsTitle title={'Soft Skills'} img={softSkills}/>
                <SkillsTitle title={'Postman'} img={postMan}/>
                <SkillsTitle title={'Storybook'} img={story}/>
                <SkillsTitle title={'Git'} img={git}/>
                <SkillsTitle title={'Sass'} img={sass}/>
                <SkillsTitle title={'HTML'} img={html}/>
                <SkillsTitle title={'CSS'} img={css}/>
            </div>
        </div>
    )
}

export default Skills
