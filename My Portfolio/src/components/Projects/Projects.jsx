import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import Project from "./Project";
import { projectData } from "./projectData";
import { projectDataTR } from "./projectDataTR";
import { useTranslation } from "react-i18next";
import "./Projects.css";

export default function Projects() {
  const { darkMode, language } = useContext(MyContext);
  const { t } = useTranslation();
  return (
    <section className={`projects-section ${darkMode ? "dark-mode" : ""}`}>
      <div className="projects flex flex-col gap-0 my-0 mx-auto pt-16 pb-12 w-1/2 max-lg:w-[90%] p-0">
        <h2 className={`projects-h2 ${darkMode ? "dark-mode" : ""}`}>
          {t("projects")}
        </h2>
        {language == "en"
          ? projectData.map((project, index) => (
              <Project key={index} {...project} />
            ))
          : projectDataTR.map((project, index) => (
              <Project key={index} {...project} />
            ))}
      </div>
    </section>
  );
}
