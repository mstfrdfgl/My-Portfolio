import { useContext } from "react";
import "./Project.css";
import { MyContext } from "../context/MyContext";

export default function Project({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
}) {
  const { darkMode } = useContext(MyContext);
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
            View Site
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
