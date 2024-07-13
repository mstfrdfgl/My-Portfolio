import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import profileImage from "/images/profileimg.png";
import { useTranslation } from "react-i18next";
import "./Profile.css";

export default function Profile() {
  const { darkMode } = useContext(MyContext);
  const { t } = useTranslation();
  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <div className="profile-container">
        <h1 className="profile-title">{t("profile-title")}</h1>
        <div className="profile-content">
          <div className="basic-info">
            <h2>{t("basic information")}</h2>
            <p>
              <strong>{t("date of birth")}</strong>
              <span>{t("date")}</span>
            </p>
            <p>
              <strong>{t("city of residence")}</strong>
              <span>Ankara</span>
            </p>
            <p>
              <strong>{t("education status")}</strong>
              <span>{t("education")}</span>
            </p>
            <p>
              <strong>{t("preferred role")}</strong>
              <span>Frontend, UI</span>
            </p>
          </div>
          <img src={profileImage} alt="Profile" />
          <div className="about-me">
            <h2>{t("about me")}</h2>
            <p>{t("about me textone")}</p>
            <p>{t("about me texttwo")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
