import React from "react";
import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-4 mb-4">
      <div className="card project-card h-100">
        <div
          className="card-img-top"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="card-body">
          <h4 className="card-title">{project.name}</h4>
          <p className="text-muted">{project.stack}</p>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("viewProject")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
