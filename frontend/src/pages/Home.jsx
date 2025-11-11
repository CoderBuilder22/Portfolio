import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import {
  SiMongodb,
  SiMysql,
  SiReact,
  SiExpress,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import DropLab from "../assets/DropLab.png";
import MusicShop from "../assets/MusicShop.png";
import FashionVibes from "../assets/FashionVibes.png";
import OnlineEducation from "../assets/OnlineEducation.png";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅ move useNavigate here

  const projects = [
    {
      name: "DropLab",
      stack: "Symfony PHP",
      description: t("droplabDesc"),
      link: "https://your-droplab-link.vercel.app",
      image: DropLab,
    },
    {
      name: "MusicShop",
      stack: "MERN Stack",
      description: t("musicshopDesc"),
      link: "https://68ef9b42479236463f53767b--verdant-dragon-84f168.netlify.app/",
      image: MusicShop,
    },
    {
      name: "FashionVibes",
      stack: "HTML, CSS",
      description: t("staticProjectDesc"),
      link: "https://your-static-project.vercel.app",
      image: FashionVibes,
    },
    {
      name: "Online Education",
      stack: "MERN Stack",
      description: t("onlineEducationDesc"),
      link: "https://68ef9dce43d0084fabf830ed--glowing-eclair-7b62e2.netlify.app/",
      image: OnlineEducation,
    },
  ];

  return (
    <div className="home-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="header-left">
          <h1>Ahmed Nasri</h1>
          <p>{t("description")}</p>
          <button
            className="contact-button"
            onClick={() => navigate("/Portfolio/contact")}
          >
            {t("contactMe")}
          </button>
        </div>
        <div className="header-right">
          <div className="avatar-placeholder">
            <img src={avatar} alt="Avatar" className="avatar-circle" />
          </div>
          <button
            className="download-cv"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "cv.pdf";
              link.click();
            }}
          >
            {t("downloadCV")}
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>{t("projects")}</h2>
        <div className="row">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      {/* Talents Section */}
      <section className="talents-section">
        <h2>{t("skills")}</h2>
        <div className="talents-content">
          <div className="talent-category">
            <h3>
              <i className="bi bi-database"></i> {t("databaseManagement")}
            </h3>
            <ul>
              <li>
                <SiMysql className="tech-icon" /> MySQL
              </li>
              <li>
                <SiMongodb className="tech-icon" /> MongoDB
              </li>
            </ul>
          </div>
          <div className="talent-category">
            <h3>
              <i className="bi bi-gear"></i> {t("frameworks")}
            </h3>
            <ul>
              <li>
                <SiReact className="tech-icon" /> React
              </li>
              <li>
                <SiExpress className="tech-icon" /> Express.js
              </li>
            </ul>
          </div>
          <div className="talent-category">
            <h3>
              <i className="bi bi-code"></i> {t("programmingLanguages")}
            </h3>
            <ul>
              <li>
                <SiJavascript className="tech-icon" /> JavaScript
              </li>
              <li>
                <SiPython className="tech-icon" /> Python
              </li>
              <li>
                <FaJava className="tech-icon" /> Java
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
