import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // close navbar on mobile when switching language
    closeNavIfOpen();
  };

  // Close Bootstrap collapse if it's currently shown (mobile)
  const closeNavIfOpen = () => {
    try {
      const navMenu = document.getElementById("navMenu");
      if (!navMenu) return;
      // If it's not shown, nothing to do
      if (!navMenu.classList.contains("show")) return;
      const bs = window.bootstrap;
      if (bs && bs.Collapse) {
        // use existing instance if present
        const instance = bs.Collapse.getInstance(navMenu) || new bs.Collapse(navMenu);
        instance.hide();
      } else {
        // fallback: toggle classes (best-effort)
        navMenu.classList.remove("show");
      }
    } catch (e) {
      // silent fail — not critical
      // console.warn('Could not close nav menu', e);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/Portfolio/">Ahmed NASRI</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/Portfolio/" onClick={closeNavIfOpen}>{t('home')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Portfolio/about" onClick={closeNavIfOpen}>{t('about')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Portfolio/projects" onClick={closeNavIfOpen}>{t('projects')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Portfolio/contact" onClick={closeNavIfOpen}>{t('contact')}</Link></li>
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
