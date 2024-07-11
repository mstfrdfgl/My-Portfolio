import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import Project from "./Project";
import { projectData } from "./projectData";
import "./Projects.css";

export default function Projects() {
  const { darkMode } = useContext(MyContext);
  return (
    <section className={`projects-section ${darkMode ? "dark-mode" : ""}`}>
      <div className="projects">
        <h2 className={`projects-h2 ${darkMode ? "dark-mode" : ""}`}>
          Projects
        </h2>
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
