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
          <p className="project-stack">{project.stack}</p>
          <p>{project.description}</p>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {t("viewProject")}
            </a>
          ) : (
            <button
              type="button"
              className="btn"
              disabled
              aria-disabled="true"
              title={t("notDeployed")}
            >
              {t("notDeployed")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
