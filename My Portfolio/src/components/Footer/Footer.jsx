import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { FaInstagram, FaCodepen } from "react-icons/fa";
import { FiTwitter, FiAtSign } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const { darkMode } = useContext(MyContext);
  return (
    <footer className={darkMode ? "dark-mode" : ""}>
      <div className="footer-container">
        <h3 className={darkMode ? "dark-mode" : ""}>Send me a message!</h3>
        <p className={darkMode ? "dark-mode" : ""}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <a
          href="mailto:almilasucode@gmail.com"
          className={`email ${darkMode ? "dark-mode" : ""}`}
        >
          almilasucode@gmail.com
        </a>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter className={darkMode ? "dark-mode" : ""} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen className={darkMode ? "dark-mode" : ""} />
          </a>
          <a
            href="mailto:almilasucode@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiAtSign className={darkMode ? "dark-mode" : ""} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={darkMode ? "dark-mode" : ""} />
          </a>
        </div>
      </div>
    </footer>
  );
}
