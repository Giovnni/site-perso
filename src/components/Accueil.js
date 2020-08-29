import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {TweenMax, Power3, TimelineLite} from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { useTranslation } from 'react-i18next';

const Accueil = () => {
    gsap.registerPlugin(TweenMax, Power3, TimelineLite, ScrollToPlugin, CSSRulePlugin);
    let welcome = useRef(null);
    let moi = useRef(null);
    let situation = useRef(null);
    let actualite = useRef(null);
    let icone1 = useRef(null);
    let icone2 = useRef(null);
    let goDown = useRef(null);

    //surlignements
    let surlignement = CSSRulePlugin.getRule(".accueil-container-infos-content .accueil-surlignement:after");
    
    const tl = new TimelineLite();
        function goingDownButton() {
            gsap.to(window, 
                {
                    duration: 1, 
                    scrollTo: '#about',
                }
            )
        }

    useEffect(() => {
        tl.staggerFromTo(
            [welcome, moi, situation, actualite],
            0.8,
            {
                visibility: 'hidden',
                opacity: 0,
                x: -5,
            },
            {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                ease: Power3.easeIn,
            },
            0.5,
        )

        .staggerFromTo(
            [icone1, icone2],
            0.2,
            {
                opacity: 0,
                y: -70,
            },
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
            },
            0.5,
        )

        .fromTo(
            goDown, 1,
            {
                opacity: 0,
                y: -70,
            },
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
            },
            "+=0.5"
        )
        
        .staggerTo(
        [surlignement],
        0.8,
        {
            animationName: 'animSurlignement',
        }
    )
    })

    const { t, i18n } = useTranslation();

    function switchLang(lang) {
        i18n.changeLanguage(lang)
    }

    return (
        <section className="accueil-section" id="home">
            <div className="accueil-page">
                <div className="accueil-container-infos">
                    <div className="accueil-container-infos-content">
                        <div className="bouton-langue-container">
                            <span className="bouton-langue-fr" onClick={() => switchLang('fr')}>FR</span>
                            <span className="bouton-langue-en" onClick={() => switchLang('en')}>EN</span>
                        </div>
                        <p className="accueil-welcome" ref={el => {welcome = el}}>{t('accueil.part1', {returnObjects: true})}</p> 
                        <p className="accueil-me" ref={el => {moi = el}}>{t('accueil.part2', {returnObjects: true})}<span className="accueil-nom accueil-surlignement">Giovanni Haddadi</span></p>
                        <p className="accueil-situation" ref={el => {situation = el}}>{t('accueil.part3', {returnObjects: true})}<a target="_blank" rel="noopener noreferrer" href="https://www.isen-lille.fr/">ISEN Lille </a>{t('accueil.part3-1', {returnObjects: true})}</p>
                        <p className="accueil-actualite" ref={el => {actualite = el}}>{t('accueil.part4', {returnObjects: true})}<span className="accueil-surlignement">{t('accueil.part4-1', {returnObjects: true})}</span>{t('accueil.part4-2', {returnObjects: true})}<br/><span className="accueil-surlignement">{t('accueil.part4-3', {returnObjects: true})}</span> </p>
                        <div className="accueil-icones">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/giovanni-haddadi/">
                                <i ref={el => {icone1 = el}} className="fab fa-linkedin-in"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:giovanni.haddadi@isen.yncrea.fr">
                                <i ref={el => {icone2 = el}} className="far fa-envelope"></i>
                            </a>
                        </div>
                        <div className="accueil-go-down">
                            <button className="accueil-bouton-next-section" onClick={goingDownButton}>
                                <i ref={el => {goDown = el}} className="fas fa-chevron-down"></i>
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accueil
