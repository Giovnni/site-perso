import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {TweenMax, TimelineMax} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next';

const Competences = () => {
    gsap.registerPlugin(TweenMax, ScrollTrigger, TimelineMax)
    const tl = new TimelineMax();

    ScrollTrigger.defaults({
        toggleActions: "play resume resume resume"
    })

    let titre = useRef(null)
    let skillContainerHard = useRef(null)
    let skillContainerSoft = useRef(null)

    useEffect(() => {
        tl.fromTo(titre, 
            {
                opacity: 0,
            },
            {
                scrollTrigger:{
                    trigger: titre,
                    
                    start: "top center",
                },
                opacity: 1,
                animationName: 'flipInX',
                animationDuration: '1s',
            })

            .fromTo([skillContainerHard, skillContainerSoft],
                {
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: skillContainerHard,
                        
                        start: "top center",
                    },
                    opacity: 1,
                    animationName: 'backInDown',
                    animationDuration: '1s',
                    stagger: '1s',
                })
    })

    const { t } = useTranslation();

    return (
        <section className="competences-section" id="skills">
            <h2 ref={el => {titre = el}}>{t('competence.titre-section', {returnObjects: true})}</h2>
            <div className="competences-container">
                <div ref={el => {skillContainerHard = el}} className="competences-hardskills-container">
                    <div className="competences-content">
                        <p>{t('competence.titre1', {returnObjects: true})}</p>
                        <div className="competences-skills">
                            <span>C</span>
                            <span>Java</span>
                            <span>JEE</span>
                            <span>JavaScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>PHP</span>
                            <span>SQL</span>
                            <span>ReactJS</span>
                            <span>Git</span>
                        </div>
                    </div>
                </div>
                <div ref={el => {skillContainerSoft = el}} className="competences-softskills-container">
                    <div className="competences-content">
                        <p>{t('competence.titre2', {returnObjects: true})}</p>
                        <div className="competences-skills">
                            <span>{t('competence.skill1', {returnObjects: true})}</span>
                            <span>{t('competence.skill2', {returnObjects: true})}</span>
                            <span>{t('competence.skill3', {returnObjects: true})}</span>
                            <span>{t('competence.skill4', {returnObjects: true})}</span>
                            <span>{t('competence.skill5', {returnObjects: true})}</span>
                            <span>{t('competence.skill6', {returnObjects: true})}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competences
