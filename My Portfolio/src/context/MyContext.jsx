import i18next, { changeLanguage } from "i18next";
import { createContext, useState, useEffect, useReducer } from "react";
export const MyContext = createContext();

const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
  language: localStorage.getItem("language") || "en",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);

  useEffect(() => {
    localStorage.setItem("language", state.language);
    i18next.changeLanguage(state.language);
  }, [state.language]);

  const changeLanguage = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
  };
  const toggleDarkMode = (mode) => {
    dispatch({ type: "SET_DARK_MODE", payload: mode });
  };
  return (
    <MyContext.Provider
      value={{
        darkMode: state.darkMode,
        toggleDarkMode,
        language: state.language,
        changeLanguage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
