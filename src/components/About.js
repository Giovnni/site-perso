import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next';

const About = () => {
    gsap.registerPlugin(ScrollTrigger, Power3)
    ScrollTrigger.defaults({
        toggleActions: "play resume resume resume"
    })

    let presentationUno = useRef(null)
    let presentationDos = useRef(null)

    useEffect(() => {
        gsap.fromTo(presentationUno, 
            {
                visibility: 'hidden',
                opacity: 0,
            },
            {
                scrollTrigger:{
                    trigger: presentationUno,
                    
                    start: "top center",
                },
                visibility: 'visible',
                ease: Power3.easeIn,
                opacity: 1,
                duration: 1
            })

            gsap.fromTo(presentationDos, 
                {
                    visibility: 'hidden',
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: presentationDos,
                        
                        start: "top center",
                    },
                    visibility: 'visible',
                    ease: Power3.easeIn,
                    opacity: 1,
                    duration: 1
                })
    })

    const { t } = useTranslation();

    return (
        <section className="about-section" id="about">
            <div className="about-page">
                <div className="about-content">
                    <p ref={el => {presentationUno = el}}>
                        {t('about-me.part1-1', {returnObjects: true})}
                        <strong>{t('about-me.bold1-1', {returnObjects: true})}</strong>
                        {t('about-me.part1-2', {returnObjects: true})}
                    </p>
                    <p ref={el => {presentationDos = el}}>
                        {t('about-me.part2-1', {returnObjects: true})}
                        <strong>{t('about-me.bold2-1', {returnObjects: true})}</strong>
                        {t('about-me.part2-2', {returnObjects: true})}
                        <strong>{t('about-me.bold2-2', {returnObjects: true})}</strong>
                        {t('about-me.part2-3', {returnObjects: true})}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
