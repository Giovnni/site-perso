import React, {useRef, useEffect} from 'react';
import logoISEN from "../images/logo-isen.png";
import logoCAU from "../images/logo-CAU.png";
import logoALV from "../images/logo-ALV.png";
import logoGDM from "../images/logo-GDM.png";
import gsap from 'gsap'
import {TweenMax, Power3, Power0, TimelineMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const experienceItems = [
        {
            titre: "Cycle ingénieur - Ingénieur d'affaires spécialité développement logiciel",
            entreprise: "ISEN (Institut supérieur de l'électronique et du numérique), France",
            dates: "Sept. 2015 - Sept. 2020",
            description: "Master 2 d’Ingénierie d'affaires avec une spécialité en développement logiciel",
            logo:{
                image: logoISEN,
                alt: 'Logo ISEN Lille',
                lien: 'https://www.isen-lille.fr/',
            }
        },
        {
            titre: "Student Exchange Program - ICT Software Engineering",
            entreprise: "Chung-Ang University, Corée du Sud",
            dates: "Févr. 2019 - Juill. 2019",
            description: "Semestre d'échange à l'international en majeure Computer Science",
            logo:{
                image: logoCAU,
                alt: 'Logo Chung-Ang University',
                lien: 'https://neweng.cau.ac.kr/index.do',
            }
        },
        {
            titre: "Ambassadeur ISEN",
            entreprise: "Yncrea Hauts-de-France, Lille, France",
            dates: "Sept. 2017 - Juill. 2018",
            description: "Promotion de l'école dans les salons et les forums et accompagnement des étudiants et de leur famille lors des portes ouvertes",
            logo:{
                image: logoISEN,
                alt: 'Logo ISEN Lille',
                lien: 'https://www.isen-lille.fr/',
            }
        },
        {
            titre: "Animateur d'accueil de loisirs",
            entreprise: "Autrement Loisirs et Voyages, Vagney, France",
            dates: "Févr. 2017 et Juill. 2017",
            description: "Encadrement d'enfants âgés de 6 à 14 ans en colonie de vacances et organisation de jeux et d'activités",
            logo:{
                image: logoALV,
                alt: 'Logo Autrement Loisirs et Voyages',
                lien: 'http://www.tootazimut.fr/',
            }
        },
        {
            titre: "Préparateur de commandes",
            entreprise: "EPHIGEA, Neuvile-en-Ferrain, France",
            dates: "Août 2016",
            description: "Préparation des livraisons et des expéditions ainsi que l'organisation du rangement des stocks restants sur palettes et dans l'entrepôt",
            logo:{
                image: logoGDM,
                alt: 'Logo Grain de Malice',
                lien: 'https://www.graindemalice.fr/',
            }
        },
    ]

    gsap.registerPlugin(ScrollTrigger, TweenMax, Power3, Power0, TimelineMax, CSSRulePlugin);
    let blocExperience = useRef([])
    let titre = useRef(null)
    let experienceNom = useRef([])
    let experienceDate = useRef([])
    let experienceLieu = useRef([])
    let experienceDescription = useRef([])
    let experienceCercleLogo = useRef([])
    let experienceLogo = useRef([])
    let timelineBarre = CSSRulePlugin.getRule(".containerExperience::after")
    let experienceContainer = useRef(null)
    
    const tl = new TimelineMax();

    ScrollTrigger.defaults({
        toggleActions: "play resume resume resume"
      });


      useEffect(() => {
          
        function circleAppearance(i) {
            gsap.to(experienceCercleLogo.current[i],
                {
                    opacity: 1,
                    animationName: 'fadeInDown',
                    animationDuration: '1s',
                })
        }

        TweenMax.fromTo(titre, 
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
            
            TweenMax.fromTo(timelineBarre, 1,
                {
                    height: '0%',
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: experienceContainer,
                        start: "top center",
                    },
                    height: '10%',
                    opacity: 1,
                    ease: Power0.easeNone,
                    onStart: circleAppearance,
                    onStartParams: [0],
                })

                TweenMax.fromTo(timelineBarre, 1,
                    {
                        height: '10%',
                        opacity: 0,
                    },
                    {
                        scrollTrigger:{
                            trigger: experienceCercleLogo.current[0],
                            
                            start: "center center",
                        },
                        height: '31%',
                        opacity: 1,
                        ease: Power0.easeNone,
                        onStart: circleAppearance,
                        onStartParams: [1],
                    })


                TweenMax.fromTo(timelineBarre, 1,
                    {
                        height: '31%',
                        opacity: 0,
                    },
                    {
                        scrollTrigger:{
                            trigger: experienceCercleLogo.current[1],
                            
                            start: "center center",
                        },
                        height: '51%',
                        opacity: 1,
                        ease: Power0.easeNone,
                        onStart: circleAppearance,
                        onStartParams: [2],
                    })

                    TweenMax.fromTo(timelineBarre, 1,
                        {
                            height: '51%',
                        },
                        {
                            scrollTrigger:{
                                trigger: experienceCercleLogo.current[2],
                                
                                start: "center center",
                            },
                            height: '71%',
                            ease: Power0.easeNone,
                            onStart: circleAppearance,
                            onStartParams: [3],
                        })

                        TweenMax.fromTo(timelineBarre, 1,
                            {
                                height: '71%',
                            },
                            {
                                scrollTrigger:{
                                    trigger: experienceCercleLogo.current[3],
                                    
                                    start: "center center",
                                },
                                height: '91%',
                                ease: Power0.easeNone,
                                onStart: circleAppearance,
                                onStartParams: [4],
                            })

                            TweenMax.fromTo(timelineBarre, 1,
                                {
                                    height: '91%',
                                },
                                {
                                    scrollTrigger:{
                                        trigger: experienceCercleLogo.current[4],
                                        
                                        start: "center center",
                                    },
                                    height: '100%',
                                    ease: Power0.easeNone,
                                })

        for(let i = 0; i < blocExperience.current.length; i++){
            if (i%2 === 0 || i === 0) {
                gsap.fromTo(
                    experienceLogo.current[i], 
                    0.5,
                    {
                        opacity: 0,
                    },
                    {
                        scrollTrigger: { trigger: experienceLogo.current[i],  start: "center center", },
                        opacity: 1,
                        animationName: 'bounceIn',
                        animationDuration: '1s',
                    },
                )

                gsap.to(blocExperience.current[i],
                    0.2,
                    {
                    scrollTrigger: { trigger: blocExperience.current[i], start: "top center",},
                    background: '#FFEECB',
                    border: '3px solid black',
                    boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.3)',
                    })
                
                tl.fromTo(
                    [experienceNom.current[i], experienceDate.current[i], experienceLieu.current[i], experienceDescription.current[i]], 
                    0.5,
                    {
                        opacity: 0,
                    },
                    {
                        scrollTrigger: { trigger: experienceCercleLogo.current[i],  start: "center center", },
                        opacity: 1,
                        animationName: 'zoomInLeft',
                        animationDuration: '1s',
                    },
                    1,
                )
            }

            else {
                tl.fromTo(
                    [experienceNom.current[i], experienceDate.current[i], experienceLieu.current[i], experienceDescription.current[i]], 
                    0.5,
                    {
                        opacity: 0,
                    },
                    {
                        scrollTrigger: { trigger: experienceCercleLogo.current[i],  start: "center center", },
                        opacity: 1,
                        animationName: 'zoomInRight',
                        animationDuration: '1s',
                    },
                    1,
                )

                .fromTo(
                    experienceLogo.current[i], 
                    0.5,
                    {
                        opacity: 0,
                    },
                    {
                        scrollTrigger: { trigger: experienceLogo.current[i],  start: "center center", },
                        opacity: 1,
                        animationName: 'bounceIn',
                        animationDuration: '1s',
                    },
                )
                
                gsap.to(blocExperience.current[i],
                    0.2,
                    {
                    scrollTrigger: { trigger: experienceCercleLogo.current[i], start: "top center",},
                    background: '#FFEECB',
                    border: '3px solid black',
                    boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.3)',
                    })
            }
        }
      },)

    const { t } = useTranslation();

    return (
        <section className='experience-section' id="resume">
            <div className="experience-page">
                <h2 ref={el => {titre = el}} className="experience-titre">{t('experience-titre', {returnObjects: true})}</h2>
                <div className="containerExperience" ref={el => {experienceContainer = el}}>
                    {t('experience', {returnObjects: true}).map((experience, index) => (
                            <div key={index} className="blocExperience">
                                <div className="blocExperience-content" ref={el => { blocExperience.current[index] = el }}>
                                    <p ref={el => { experienceNom.current[index] = el }} className="experience-nom">{experience.titre}</p>
                                    <div ref={el => { experienceDate.current[index] = el }} className="experience-div-dates">
                                        <p className="experience-dates"><i className="far fa-clock" />{experience.dates}</p>
                                    </div>
                                    <div ref={el => { experienceLieu.current[index] = el }} className="experience-div-lieu" style={{paddingTop: '5px',}}>
                                        <p className="experience-lieu"><i className="fas fa-map-pin" />{experience.entreprise}</p>
                                    </div>
                                    <p ref={el => { experienceDescription.current[index] = el }} className="experience-description">{experience.description}</p>
                                    <div ref={el => {experienceCercleLogo.current[index] = el}} className="circle">
                                        <a target="_blank" rel="noopener noreferrer" href={experience.logo.lien}>
                                            <img ref={el => { experienceLogo.current[index] = el }} src={experience.logo.image} alt={experience.logo.alt}></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
