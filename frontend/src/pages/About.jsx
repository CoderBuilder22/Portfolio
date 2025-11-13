import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about-page container">
      <AnimateOnScroll animation="fade-up" className="about-inner">
        <h2>{t('aboutMe')}</h2>
        <div className="about-section">
        <h3>{t('education')}</h3>
        <ul>
          <li>🎓 {t('licenceDegree')}</li>
          <li>🎓 {t('baccalaureate')}</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>{t('languages')}</h3>
        <ul>
          <li>🇫🇷 {t('frenchLevel')}</li>
          <li>🇺🇸 {t('englishLevel')}</li>
          <li>🇪🇸 {t('spanishLevel')}</li>
        </ul>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
