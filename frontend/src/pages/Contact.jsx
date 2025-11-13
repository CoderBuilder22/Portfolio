import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="container">
        <AnimateOnScroll animation="fade-up" className="contact-container anim-delay-1">
          <h2>{t('contactMe')}</h2>
          <div className="contact-info">
            <p>{t('email')} <a href="mailto:ahmednasrism@gmail.com">ahmednasrism@gmail.com</a></p>
            <p>{t('phone')} <a href="tel:+21656246038">+216 56246038</a></p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nasriahmed/" target="_blank" title="LinkedIn" className="linkedin"></a>
            <a href="https://github.com/CoderBuilder22" target="_blank" title="GitHub" className="github"></a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
