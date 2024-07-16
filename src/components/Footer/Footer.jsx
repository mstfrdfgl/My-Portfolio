import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { FaInstagram, FaCodepen } from "react-icons/fa";
import { FiTwitter, FiAtSign } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import "./Footer.css";

export default function Footer() {
  const { darkMode } = useContext(MyContext);
  const { t } = useTranslation();
  return (
    <footer className={darkMode ? "dark-mode" : ""}>
      <div className="footer-container flex flex-col gap-4 w-[30%] my-0 mx-auto max-lg:w-[70%] max-md:w-[80%] max-sm:w-full">
        <h3 className={darkMode ? "dark-mode" : ""}>
          {t("footer-send-me-a-message")}
        </h3>
        <p className={darkMode ? "dark-mode" : ""}>{t("footer-question")}</p>
        <a
          href="mailto:almilasucode@gmail.com"
          className={`email ${darkMode ? "dark-mode" : ""}`}
        >
          almilasucode@gmail.com
        </a>
        <div className="social-icons flex justify-center gap-4">
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
