import i18next, { changeLanguage } from "i18next";
import { createContext, useState, useEffect } from "react";
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "en";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18next.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <MyContext.Provider
      value={{ darkMode, setDarkMode, language, changeLanguage }}
    >
      {children}
    </MyContext.Provider>
  );
};
