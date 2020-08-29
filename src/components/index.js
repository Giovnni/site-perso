import React, { Suspense } from 'react'
import Navbar from './Navbar'
import Accueil from './Accueil'
import About from './About'
import Experience from './Experience'
import Projets from './Projets'
import Competences from './Competences'
import Langues from './Langues'
import Footer from './Footer'
import '../i18next'

const Home = () => {
    return (
        <Suspense fallback={(<div>Chargement...</div>)}>
        <div className="body">
            <Navbar />
            <Accueil />
            <About />
            <Experience />
            <Projets />
            <Competences />
            <Langues />
            <Footer />
        </div>
        </Suspense>
    )
}

export default Home
