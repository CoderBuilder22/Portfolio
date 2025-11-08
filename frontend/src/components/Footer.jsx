import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <p className="mb-0">
        {t('footerText').replace('2023', new Date().getFullYear())}
      </p>
    </footer>
  );
}
