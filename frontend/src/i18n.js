import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",
      "welcome": "Welcome to my portfolio",
      "description": "I'm a web developer passionate about creating amazing user experiences.",
      "viewProjects": "View Projects",
      "aboutMe": "About Me",
      "aboutText": "I am a dedicated web developer with experience in modern technologies.",
      "skills": "Skills",
      "contactMe": "Contact Me",
      "sendMessage": "Send Message",
      "footerText": "© 2023 Ahmed NASRI. All rights reserved.",
      "downloadCV": "Download CV",
      "databaseManagement": "Database Management",
      "frameworks": "Frameworks",
      "programmingLanguages": "Programming Languages",
      "education": "Education",
      "languages": "Languages",
      "email": "Email:",
      "phone": "Phone:",
      "droplabDesc": "Online sales platform for musical beats.",
      "musicshopDesc": "E-commerce site for selling musical instruments.",
      "staticProjectDesc": "Basic project to practice web development.",
      "onlineEducationDesc": "This project is an online learning platform.",
      "frenchLevel": "French : B1",
      "englishLevel": "English : C1",
      "spanishLevel": "Spanish : A2",
      "licenceDegree": "Applied Bachelor's Degree - ISET Rades (2023-2026)",
      "baccalaureate": "Computer Science Baccalaureate - Ras Jebel High School (2023)",
      "viewProject": "View Project"
    }
  },
  fr: {
    translation: {
      "home": "Accueil",
      "about": "À propos",
      "projects": "Projets",
      "contact": "Contact",
      "welcome": "Bienvenue sur mon portfolio",
      "description": "Je suis un développeur web passionné par la création d'expériences utilisateur exceptionnelles.",
      "viewProjects": "Voir les Projets",
      "aboutMe": "À Propos de Moi",
      "aboutText": "Je suis un développeur web dédié avec de l'expérience dans les technologies modernes.",
      "skills": "Compétences",
      "contactMe": "Me Contacter",
      "sendMessage": "Envoyer un Message",
      "footerText": "© 2023 Ahmed NASRI. Tous droits réservés.",
      "downloadCV": "Télécharger CV",
      "databaseManagement": "Gestion de Base de Données",
      "frameworks": "Frameworks",
      "programmingLanguages": "Langages de Programmation",
      "education": "Formations",
      "languages": "Langues",
      "email": "Email :",
      "phone": "Téléphone :",
      "droplabDesc": "Plateforme de vente en ligne pour beats musicaux.",
      "musicshopDesc": "Site e-commerce pour la vente d'instruments musicaux.",
      "staticProjectDesc": "Projet de base pour pratiquer le développement web.",
      "onlineEducationDesc": "Ce Projet est un plateforme d’apprentissage en ligne.",
      "frenchLevel": "Français : B1",
      "englishLevel": "Anglais : C1",
      "spanishLevel": "Espagnol : A2",
      "licenceDegree": "Licence Appliquée - ISET Rades (2023-2026)",
      "baccalaureate": "Baccalauréat Informatique - Lycée Ras Jebel (2023)",
      "viewProject": "Voir le projet"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
