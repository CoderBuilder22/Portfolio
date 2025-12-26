import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import DropLab from "../assets/DropLab.png";
import MusicShop from "../assets/MusicShop.png";
import FashionVibes from "../assets/FashionVibes.png";
import OnlineEducation from "../assets/OnlineEducation.png";
import Khadameni from "../assets/Khadamni.png";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: "DropLab",
      stack: "Symfony PHP",
      description: t("droplabDesc"),
      link: "",
      image: DropLab,
    },
    {
      name: "MusicShop",
      stack: "MERN Stack",
      description: t("musicshopDesc"),
      link: "",
      image: MusicShop,
    },
    {
      name: "Online Education",
      stack: "MERN Stack",
      description: t("onlineEducationDesc"),
      link: "",
      image: OnlineEducation,
    },
    {
      name: "FashionVibes",
      stack: "HTML, CSS",
      description: t("staticProjectDesc"),
      link: "https://coderbuilder22.github.io/Project-Static-Ecommerce/mainPage.html",
      image: FashionVibes,
    },
    {
      name: "Khadameni",
      stack: "MERN Stack",
      description: t("khadameniDesc"),
      link: "",
      image: Khadameni,
    },
  ];

  return (
    <div className="projects-page container">
      <AnimateOnScroll animation="fade-up" className="projects-inner">
        <h2>{t("projects")}</h2>
        <div className="row">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
