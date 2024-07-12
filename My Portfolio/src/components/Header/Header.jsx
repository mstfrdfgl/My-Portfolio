import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import headerRight from "/images/hero-right.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(MyContext);
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = useContext(MyContext);

  function handleDarkMode() {
    setDarkMode((prevValue) => !prevValue);
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
    <header className={darkMode ? "dark-mode" : ""}>
      <div className="header-top">
        <span className="brand">almila</span>
        <div className="controls">
          {language == "en" ? english : turkish}
          <button
            className={`dark-mode-toggle ${darkMode ? "dark-mode" : ""}`}
            onClick={handleDarkMode}
          >
            {darkMode ? t("lightMode") : t("darkMode")}
          </button>
        </div>
      </div>
      <div className="header-content">
        <div className="text-section">
          <h1>{t("headline")}</h1>
          <p>{t("description")}</p>
          <div className="buttons">
            <button className={`btn github ${darkMode ? "dark-mode" : ""}`}>
              Github
            </button>
            <button className={`btn linkedin ${darkMode ? "dark-mode" : ""}`}>
              LinkedIn
            </button>
          </div>
        </div>
        <div className="image-section">
          <img src={headerRight} alt="Profile" />
        </div>
      </div>
    </header>
  );
}
