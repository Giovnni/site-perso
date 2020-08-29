import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    
    const { t } = useTranslation();

    return (
        <section className="footer-section">
            <div className="footer-container">
                <div className="download-resume">
                    <a href={t('footer.chemin-cv', {returnObjects: true})} download={t('footer.nom-fichier', {returnObjects: true})}>
                        <i className="fas fa-cloud-download-alt"></i>
                        <span>{t('footer.download', {returnObjects: true})}</span>
                    </a>
                </div>
                <div className="footer-content-icones">
                    <a target="_blank" rel="noopener noreferrer" href='mailto:giovanni.haddadi@isen.yncrea.fr'>
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/giovanni-haddadi/'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer
