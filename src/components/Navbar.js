import React, {useRef} from 'react'
import gsap from 'gsap'
import {TweenMax, TweenLite, Power3} from 'gsap'
import { useTranslation } from 'react-i18next';



const Navbar = () => {
    gsap.registerPlugin(TweenMax, TweenLite, Power3);
    let boutonMenu = useRef(null);
    let navbar = useRef(null);

    function onClickMenu() {
        if(boutonMenu.classList.contains("navbar-menu-button-open")) {
            boutonMenu.classList.remove("navbar-menu-button-open");
            navbar.classList.remove("background-menu-on");
            navbar.classList.add("background-menu-off");
            
            TweenMax.to(boutonMenu, 0.8,
                {
                    y: 0,
                    duration: 0.5,
                })
            
            TweenMax.fromTo(navbar, 0.5,
                {
                    y: 0,
                    visibility: 'visible',
                },
                {
                    y: '-100%',
                    ease: Power3.easeInOut,
                })
        }
        else {
            boutonMenu.classList.add("navbar-menu-button-open");
            navbar.classList.add("background-menu-on");
            navbar.classList.remove("background-menu-off");
            
            TweenMax.fromTo(navbar, 1,
                {
                    visibility: 'hidden',
                    y: '-100%',
                },
                {
                    y: 0,
                    visibility: 'visible',
                    ease: Power3.easeInOut,
                })
        }        
    }

    
    function closeMenu() {
        boutonMenu.classList.remove("navbar-menu-button-on");
        navbar.classList.remove("background-menu-off");
        boutonMenu.classList.remove("navbar-menu-button-open");
        TweenMax.fromTo(navbar, 0.5,
            {
                visibility: 'visible',
                y: 0,
            },
            {
                y: '-100%',
                ease: Power3.easeInOut,
            })
    }

    const { t } = useTranslation();
    
    return (

        <nav className="navbar">
        <a ref={el => {boutonMenu = el}} className="navbar-menu-button" onClick={onClickMenu} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
            <div ref={el => {navbar = el}} className="navbar-container">
                <ul className="navbar-menu">
                    <li>
                        <a href="#home" onClick={closeMenu}>
                            {t('navbar.section1', {returnObjects: true})}
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={closeMenu}>
                            {t('navbar.section2', {returnObjects: true})}
                        </a>
                    </li>
                    <li>
                        <a href="#projets" onClick={closeMenu}>
                            {t('navbar.section3', {returnObjects: true})}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            {t('navbar.section4', {returnObjects: true})}
                        </a>
                    </li>
                    <li>
                        <a href="#lang" onClick={closeMenu}>
                            {t('navbar.section5', {returnObjects: true})}
                        </a>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}

export default Navbar
