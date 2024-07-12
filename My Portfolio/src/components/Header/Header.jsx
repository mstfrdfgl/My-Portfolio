import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import headerRight from "../../../public/images/hero-right.png";
import "./Header.css";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(MyContext);

  function handleDarkMode() {
    setDarkMode((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <div className="header-top">
        <span className="brand">almila</span>
        <div className="controls">
          <button className={`language-switch ${darkMode ? "dark-mode" : ""}`}>
            TÜRKÇE<span className="d9d9d9">'YE GEÇ</span>
          </button>
          <button
            className={`dark-mode-toggle ${darkMode ? "dark-mode" : ""}`}
            onClick={handleDarkMode}
          >
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </button>
        </div>
      </div>
      <div className="header-content">
        <div className="text-section">
          <h1>I am a Frontend Developer...</h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
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
