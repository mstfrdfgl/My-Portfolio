import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import headerRight from "/images/hero-right.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(MyContext);
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(MyContext);

  function handleDarkMode() {
    toggleDarkMode(!darkMode);
  }

  function handleLanguageChange(lang) {
    changeLanguage(lang);
  }
  const english = (
    <button
      onClick={() => handleLanguageChange("tr")}
      className={`language-switch ${darkMode ? "dark-mode" : ""}`}
    >
      TÜRKÇE<span className="d9d9d9">'YE GEÇ</span>
    </button>
  );
  const turkish = (
    <button
      onClick={() => handleLanguageChange("en")}
      className={`language-switch ${darkMode ? "dark-mode" : ""}`}
    >
      ENGLISH
    </button>
  );

  return (
    <header className={` ${darkMode ? "dark-mode" : ""}`}>
      <div className="flex justify-between w-1/2 max-xl:w-[70%] max-lg:w-9/12 max-lg:flex-col max-lg:items-center">
        <span className="text-2xl font-bold text-[#cbf281] pt-8">almila</span>
        <div className="flex justify-evenly w-[350px] gap-2.5 pt-0.1rem max-lg:w-full max-lg:justify-center max-lg:pt-4 max-sm:flex-col max-sm:gap-0.5">
          {language == "en" ? english : turkish}
          <button
            className={`dark-mode-toggle ${darkMode ? "dark-mode" : ""}`}
            onClick={handleDarkMode}
          >
            {darkMode ? t("lightMode") : t("darkMode")}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-1/2 md:w-70 mx-0 mt-10 mb-24 max-xl:w-[70%] max-lg:w-[90%] max-lg:flex-col max-lg:items-center max-sm:mx-0 max-sm:mt-8 max-sm:mb-16">
        <div className="flex flex-col justify-end flex-1 text-left gap-4 h-[300px] max-lg:text-center max-lg:justify-center max-lg:h-auto">
          <h1 className="w-[70%] text-5xl font-bold text-[#cbf281] m-0 max-lg:w-full max-lg:text-4xl max-sm:text-3xl">
            {t("headline")}
          </h1>
          <p className="text-xl text-white font-normal w-[75%] max-lg:w-full max-sm:text-sm">
            {t("description")}
          </p>
          <div className="flex gap-2.5 max-lg:justify-center">
            <button className={`btn github ${darkMode ? "dark-mode" : ""}`}>
              Github
            </button>
            <button className={`btn linkedin ${darkMode ? "dark-mode" : ""}`}>
              LinkedIn
            </button>
          </div>
        </div>
        <div className="w-auto h-auto max-lg:flex max-lg:w-[65%] max-lg:justify-center max-lg:items-center max-lg:mt-5 ">
          <img
            className="w-[80%] min-w-[250px] h-[80%] rounded-2xl shadow-2xl my-0 mx-auto max-lg:w-[60%] max-lg:h-auto"
            src={headerRight}
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
}
