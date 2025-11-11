import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: "DropLab",
      stack: "Symfony PHP",
      description: t('droplabDesc'),
      link: "https://your-droplab-link.vercel.app",
    },
    {
      name: "MusicShop",
      stack: "MERN Stack",
      description: t('musicshopDesc'),
      link: "https://68ef9b42479236463f53767b--verdant-dragon-84f168.netlify.app/",
    },
    {
      name: "FashionVibes",
      stack: "HTML, CSS",
      description: t('staticProjectDesc'),
      link: "https://your-static-project.vercel.app",
    },
    {
      name: "Online Education",
      stack: "MERN Stack",
      description: t('onlineEducationDesc'),
      link: "https://68ef9dce43d0084fabf830ed--glowing-eclair-7b62e2.netlify.app/",
    },
  ];

  return (
    <div className="projects-page container">
      <h2>{t('projects')}</h2>
      <div className="row">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}
