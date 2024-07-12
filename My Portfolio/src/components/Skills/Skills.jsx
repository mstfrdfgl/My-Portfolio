import { useContext } from "react";

import skillsData from "./skillsData";
import "./Skills.css";
import { MyContext } from "../context/MyContext";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { darkMode } = useContext(MyContext);
  const { t } = useTranslation();

  return (
    <section className={` ${darkMode ? "dark-mode" : ""}`}>
      <div className="skills-container">
        <h2 className={`skills-title ${darkMode ? "dark-mode" : ""}`}>
          {t("skills-title")}
        </h2>
        <div className="skills-list">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-item">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
