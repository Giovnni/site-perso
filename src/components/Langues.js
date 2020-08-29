import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {TweenMax, Power3, TimelineMax} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import drapeauUK from '../images/drapeau-UK.png'
import drapeauFR from '../images/drapeau-FR.png'
import { useTranslation } from 'react-i18next';


const Langues = () => {
    let titre = useRef(null)
    let langFR = useRef(null)
    let langEN = useRef(null)
    let barreProgressionEN = useRef(null)
    let barreProgressionFR = useRef(null)

    gsap.registerPlugin(TweenMax, Power3, TimelineMax, ScrollTrigger)
    const tl = new TimelineMax();

    ScrollTrigger.defaults({
        toggleActions: "play resume resume resume"
    })

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

            .fromTo([langFR, langEN],
                {
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: titre,
                        start: "center center",
                    },
                    opacity: 1,
                    animationName: 'bounceIn',
                    animationDuration: '2s',
                })
        
            .fromTo(barreProgressionFR, 2,
                {
                    transformOrigin: 'center',
                    rotate: -90,
                    strokeDasharray: 439,
                    strokeDashoffset: 439,
                },
                {
                    scrollTrigger:{
                        trigger: titre,
                        start: "bottom center",
                    },
                    transition: 1.5,
                    strokeDashoffset: 0,
                })

            .fromTo(barreProgressionEN, 2,
                {
                    transformOrigin: 'center',
                    rotate: -90,
                    strokeDasharray: 439,
                    strokeDashoffset: 439,
                },
                {
                    scrollTrigger:{
                        trigger: titre,
                        start: "bottom center",
                    },
                    transition: 1.5,
                    strokeDashoffset: 90,
                })
    },)

    const { t } = useTranslation();

    return (
        <section className="langues-section" id="lang">
            <div className="langues-page">
                <h2 ref={el => {titre = el}}>{t('langue.titre-section', {returnObjects: true})}</h2>
                <div className="langues-container">
                    <div ref={el => {langFR = el}} className="langue-fr">
                        <img src={drapeauFR} alt="Drapeau de la France"></img>
                        <svg  width="150" height="150" className="langue-contour-niveau">
                            <circle className="langue-progressBarVide" cx="75" cy="75" r="70" />
                            <circle ref={el => {barreProgressionFR = el}} className="langue-progressBarPleine" cx="75" cy="75" r="70" />
                        </svg>
                        <span className="langue-nom">{t('langue.nom1', {returnObjects: true})}</span>
                        <span className="langue-niveau">{t('langue.niveau1', {returnObjects: true})}</span>
                    </div>
                    <div ref={el => {langEN = el}} className="langue-en">
                        <img src={drapeauUK} alt="Drapeau du Royaume-Uni"></img>
                        <svg width="150" height="150" className="langue-contour-niveau">
                            <circle className="langue-progressBarVide" cx="75" cy="75" r="70" />
                            <circle ref={el => {barreProgressionEN = el}} className="langue-progressBarPleine" cx="75" cy="75" r="70" />
                        </svg>
                        <span className="langue-nom">{t('langue.nom2', {returnObjects: true})}</span>
                        <span className="langue-niveau">{t('langue.niveau2', {returnObjects: true})}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Langues
