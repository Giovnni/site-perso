import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {TweenMax, Power0} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import projetCompiler from '../images/projet-compiler.PNG'
import projetMonitoring from '../images/projet-monitoring-audio.png'
import projetEcommerce from '../images/projet-waterlife.png'
import projetAquarium from '../images/projet-aquarium-connecte.png'
import { useTranslation } from 'react-i18next';

const Projets = () => {
    gsap.registerPlugin(TweenMax, Power0, ScrollTrigger)

    ScrollTrigger.defaults({
        toggleActions: "play resume resume resume"
    })

    let titre = useRef(null)
    let carteCaroussel = useRef([])

    let i = 0
    function goRight() {
        if (i === 3) {
            gsap.fromTo(carteCaroussel.current[i], 0.8,
                {
                    animationName: 'none',
                },
                {
                    animationName: 'fadeOutRight',
                    animationDuration: 1,
                    opacity: 0,
                    position: 'absolute',
                })
            i = 0
            gsap.fromTo(carteCaroussel.current[i], 0.8,
            {
                opacity: 0,
                visibility: 'hidden',
                position: 'absolute',
            },
            {              
                opacity: 1,
                visibility: 'visible',
                position: 'relative'
            })
        }
        else {
            gsap.fromTo(carteCaroussel.current[i], 0.8,
                {                    
                    animationName: 'none',
                },
                {                   
                    animationName: 'fadeOutRight',
                    animationDuration: 1,
                    opacity: 0,
                    position: 'absolute',
                })
            i++
            gsap.fromTo(carteCaroussel.current[i], 0.8,
            {
                opacity: 0,
                visibility: 'hidden',
                position: 'absolute',
            },
            {     
                x: 0,           
                opacity: 1,
                visibility: 'visible',
                position: 'relative',
            })
        }
    }

    function goLeft() {
        if (i === 0) {
            gsap.fromTo(carteCaroussel.current[i], 0.8,
                {                   
                    animationName: 'none',
                },
                {                    
                    animationName: 'fadeOutLeft',
                    animationDuration: 1,
                    opacity: 0,
                    position: 'absolute',
                })
            i = 3
            gsap.fromTo(carteCaroussel.current[i], 0.8,
            {               
                opacity: 0,
                visibility: 'hidden',
                position: 'absolute',
            },
            {               
                opacity: 1,
                visibility: 'visible',
                position: 'relative',
            })
        }
        else {
            gsap.fromTo(carteCaroussel.current[i], 0.8,
                {                    
                    animationName: 'none',
                },
                {                    
                    animationName: 'fadeOutLeft',
                    animationDuration: 1,
                    opacity: 0,
                    position: 'absolute',
                })
            i--
            gsap.fromTo(carteCaroussel.current[i], 0.8,
            {               
                opacity: 0,
                visibility: 'hidden',
                position: 'absolute',
            },
            {               
                opacity: 1,
                visibility: 'visible',
                position: 'relative',
            })
        }
    }

    useEffect(() => {
        gsap.fromTo(titre, 
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
    })


    /*
    const projetItems = [
        {
            nom: "Implémentation d'un compilateur",
            description: "Création d'un analyseur lexical ainsi que d'un analyseur synthaxique",
            technos: [
                "C"
            ],
            image: {
                lien: projetCompiler,
                alt: "Descriptif d'un compilateur"
            }
        },
        {
            nom: "Monitoring audio des sytèmes et réseaux",
            description: "Création de scripts shell sous Linux dans le but de collecter des données sur le système et de son réseau ainsi que la réalisation d'une IU sur Pure-Data",
            technos: [
                "Scripting", "Linux", "Pure Data"
            ],
            image: {
                lien: projetMonitoring,
                alt: "Aperçu de l'Interface Utilisateur"
            }
        },
        {
            nom: "Waterlife - Site e-commerce de bouteilles d'eau",
            description: "Création d'un site e-commerce en partant de 0 avec pour contrainte de n'utiliser que le HTML, le CSS et le PHP",
            technos: [
                "HTML5", "CSS3", "PHP", "SQL"
            ],
            image: {
                lien: projetMonitoring,
                alt: "Aperçu de l'Interface Utilisateur"
            }
        },
        {
            nom: "FishtNess - Aquarium Connecté",
            description: "Elaboration d'un aquarium connecté à partir de la plateforme Constellation. Modélisation et impression de pièces 3D pour gérer le stockage et la distribution de nourriture des poissons. Mise en place d'une page web permettant d'intéragir avec l'aquarium et d'y regrouper les données de celui-ci et création d'un serveur web pour permettre d'y héberger notre projet et le rendre accessible depuis n'importe où.",
            technos: [
                "C", "HTML5", "CSS3", "PHP", "SQL", "SolidWorks", "Raspberry Pi", "Arduino"
            ],
            image: {
                lien: projetAquarium,
                alt: "Aperçu de la page de connexion"
            }
        },
    ]
    */

   const { t } = useTranslation();

    return (
        <section className="projet-section" id="projets">
            <div className="projet-bloc">
            <h2 ref={el => {titre = el}}>{t('projet.titre-section', {returnObjects: true})}</h2>
                <div className="projet-caroussel">
                    <button>
                        <i className="fas fa-chevron-circle-left" id="carousselGauche" onClick={goLeft}></i>
                    </button>
                    <div ref={el => {carteCaroussel.current[0] = el}} className="projet-container" id="projet0">
                        <div className="projet-image-container">
                            <img src={projetCompiler} alt="Descriptif d'un compilateur"></img>
                        </div>
                        <p className="projet-titre">{t('projet.titre1', {returnObjects: true})}</p>
                        <p className="projet-description">{t('projet.description1', {returnObjects: true})}</p>
                        <div className="projet-competences-container">
                            <span>C</span>
                        </div>
                    </div>

                    <div ref={el => {carteCaroussel.current[1] = el}} className="projet-container" id="projet1">
                        <div className="projet-image-container">
                            <img src={projetMonitoring} alt="Aperçu de l'Interface Utilisateur"></img>
                        </div>
                        <p className="projet-titre">{t('projet.titre2', {returnObjects: true})}</p>
                        <p className="projet-description">{t('projet.description2', {returnObjects: true})}</p>
                        <div className="projet-competences-container">
                            <span>Scripting</span>
                            <span>Linux</span>
                            <span>Pure Data</span>
                        </div>
                    </div>

                    <div ref={el => {carteCaroussel.current[2] = el}} className="projet-container" id="projet2">
                        <div className="projet-image-container">
                            <img src={projetEcommerce} alt="Aperçu de l'Interface Utilisateur"></img>
                        </div>
                        <p className="projet-titre">{t('projet.titre3', {returnObjects: true})}</p>
                        <p className="projet-description">{t('projet.description3', {returnObjects: true})}</p>
                        <div className="projet-competences-container">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>PHP</span>
                            <span>SQL</span>
                        </div>
                    </div>

                    <div ref={el => {carteCaroussel.current[3] = el}} className="projet-container" id="projet3">
                        <div className="projet-image-container">
                            <img src={projetAquarium} alt="Aperçu de la page de connexion"></img>
                        </div>
                        <p className="projet-titre">{t('projet.titre4', {returnObjects: true})}</p>
                        <p className="projet-description">{t('projet.description4', {returnObjects: true})}</p>
                        <div className="projet-competences-container">
                            <span>C</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>PHP</span>
                            <span>SQL</span>
                            <span>SolidWorks</span>
                            <span>Raspberry Pi</span>
                            <span>Arduino</span>
                        </div>
                    </div>
                    <button>
                        <i className="fas fa-chevron-circle-right" id='carousselDroite' onClick={goRight}></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projets
