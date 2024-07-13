import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "./Project.css";
import { useTranslation } from "react-i18next";

export default function Project({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
}) {
  const { darkMode } = useContext(MyContext);
  const { t } = useTranslation();
  return (
    <div className={`project ${darkMode ? "dark-mode" : ""}`}>
      <img src={image} alt={`project image`} className="project-image" />
      <div className="project-details">
        <h3 className={`project-details-h3 ${darkMode ? "dark-mode" : ""}`}>
          {title}
        </h3>
        <p className={`project-details-p ${darkMode ? "dark-mode" : ""}`}>
          {description}
        </p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className={`tech ${darkMode ? "dark-mode" : ""}`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="links">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`links-a ${darkMode ? "dark-mode" : ""}`}
          >
            {t("project-links-first")}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`links-a ${darkMode ? "dark-mode" : ""}`}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
