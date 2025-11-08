import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Ahmed NASRI</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">{t('home')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">{t('about')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">{t('projects')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">{t('contact')}</Link></li>
            <li className="nav-item">
              <button className="language-switcher ms-3" onClick={() => changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}>
                {i18n.language === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
