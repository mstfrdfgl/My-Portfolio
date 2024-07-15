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
      <img
        src={image}
        alt={`project image`}
        className="w-1/2 rounded-l-xl object-cover max-lg:w-[80%] max-lg:mx-auto max-lg:rounded-none"
      />
      <div className="project-details p-8 flex flex-col text-left justify-between">
        <h3 className={`project-details-h3 ${darkMode ? "dark-mode" : ""}`}>
          {title}
        </h3>
        <p className={`project-details-p ${darkMode ? "dark-mode" : ""}`}>
          {description}
        </p>
        <div className="flex gap-2 mb-2">
          {technologies.map((tech, index) => (
            <span key={index} className={`tech ${darkMode ? "dark-mode" : ""}`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="links flex gap-8 max-lg:gap-4">
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
