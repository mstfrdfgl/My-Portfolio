import { useContext } from "react";

import skillsData from "./skillsData";
import "./Skills.css";
import { MyContext } from "../../context/MyContext";

import { useTranslation } from "react-i18next";

const Skills = () => {
  const { darkMode } = useContext(MyContext);
  const { t } = useTranslation();

  return (
    <section className={` ${darkMode ? "dark-mode" : ""}`}>
      <div className="flex w-1/2 my-0 mx-auto text-left gap-12 max-xl:w-[70%] max-lg:w-[90%] max-lg:gap-8 max-md:w-full max-md:flex-col max-md:items-center">
        <h2 className={`skills-title ${darkMode ? "dark-mode" : ""}`}>
          {t("skills-title")}
        </h2>
        <div className="flex justify-between flex-wrap mt-20 mb-16 max-md:mt-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center mb-5 ml-4 w-[40%] max-xl:w-[45%] max-lg:ml-0 max-md:ml-6 max-sm:mb-2 max-sm:ml-4"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mr-3 rounded-md max-lg:w-16 max-lg:h-16 max-sm:w-12 max-sm:h-12 max-sm:mr-2"
              />
              <span className="font-medium text-[#777777] max-lg:text-sm max-sm:text-xs">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
