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
      <div className="flex flex-col w-1/2 my-8 mx-auto max-xl:w-[70%] max-lg:w-[90%]">
        <h1 className="text-4xl font-bold text-left mb-5  max-md:text-3xl max-md:text-center">
          {t("profile-title")}
        </h1>
        <div className="flex justify-between items-start text-left gap-6 max-xl:gap-4 max-md:gap-1 max-md:flex-col max-md:items-center">
          <div className="flex flex-col gap-1 w-[33%] text-white max-xl:w-[45%] max-md:w-full max-md:text-center max-md:gap-1">
            <h2 className="text-white text-4xl font-medium mt-0 mb-2">
              {t("basic information")}
            </h2>
            <p className="flex text-left gap-8 font-light my-1 mx-0 max-md:flex-col max-md:text-center max-md:gap-2 max-sm:text-sm">
              <strong className="text-[#cbf281] font-semibold w-[35%] max-md:w-full">
                {t("date of birth")}
              </strong>
              <span className="w-[55%] max-md:w-full">{t("date")}</span>
            </p>
            <p className="flex text-left gap-8 font-light my-1 mx-0 max-md:flex-col max-md:text-center max-md:gap-2 max-sm:text-sm">
              <strong className="text-[#cbf281] font-semibold w-[35%] max-md:w-full">
                {t("city of residence")}
              </strong>
              <span className="w-[55%] max-md:w-full">Ankara</span>
            </p>
            <p className="flex text-left gap-8 font-light my-1 mx-0 max-md:flex-col max-md:text-center max-md:gap-2 max-sm:text-sm">
              <strong className="text-[#cbf281] font-semibold w-[35%] max-md:w-full">
                {t("education status")}
              </strong>
              <span className="w-[55%] max-md:w-full">{t("education")}</span>
            </p>
            <p className="flex text-left gap-8 font-light my-1 mx-0 max-md:flex-col max-md:text-center max-md:gap-2 max-sm:text-sm">
              <strong className="text-[#cbf281] font-semibold w-[35%] max-md:w-full">
                {t("preferred role")}
              </strong>
              <span className="w-[55%] max-md:w-full">Frontend, UI</span>
            </p>
          </div>
          <img
            className="w-[30%] max-xl:w-[50%] max-sm:w-[55%]"
            src={profileImage}
            alt="Profile"
          />
          <div className="w-[33%] text-white flex flex-col gap-4 max-xl:w-[45%] max-md:w-full max-md:text-center max-md:gap-1 max-md:items-center">
            <h2 className="text-white text-4xl font-medium mt-0 mb-2">
              {t("about me")}
            </h2>
            <p className="font-light my-1 mx-0 max-xl:text-sm">
              {t("about me textone")}
            </p>
            <p className="font-light my-1 mx-0 max-xl:text-sm">
              {t("about me texttwo")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
