import { useContext } from "react";

import skillsData from "./skillsData";
import "./Skills.css";
import { MyContext } from "../context/MyContext";

const Skills = () => {
  const { darkMode } = useContext(MyContext);

  return (
    <section className={` ${darkMode ? "dark-mode" : ""}`}>
      <div className="skills-container">
        <h2 className={`skills-title ${darkMode ? "dark-mode" : ""}`}>
          Skills
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
