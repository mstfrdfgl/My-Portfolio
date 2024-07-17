import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/MyContext";

export default function SubsList() {
  const { subscribers, darkMode, loading, error } = useContext(MyContext);
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center justify-center w-full bg-[#cbf281] ${
        darkMode ? "bg-[#252128]" : ""
      }`}
    >
      <div
        className={`w-[50%] bg-white rounded-lg shadow-lg p-6 max-xl:w-[90%] max-md:w-[95%] max-sm:w-[100%] ${
          darkMode ? "bg-[#252128]" : ""
        }`}
      >
        <h2
          className={`text-2xl font-bold text-gray-700 mb-6 ${
            darkMode ? "text-white" : ""
          }`}
        >
          {t("subs-list")}
        </h2>
        {loading ? (
          <p className={darkMode ? "text-white" : "text-gray-700"}>
            {t("loading-subscribers")}
          </p>
        ) : error ? (
          <p className="text-red-500">
            {t("error-fetching-subscribers")} {error}
          </p>
        ) : (
          <ul className="space-y-4">
            {subscribers.map((subscriber) => (
              <li
                key={subscriber.id}
                className={`bg-[#f0f0f0] rounded-md p-4 shadow hover:shadow-md transition-shadow duration-300 ${
                  darkMode ? "bg-[#1a210b]" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p
                    className={`text-lg text-gray-800 mb-2 sm:mb-0 ${
                      darkMode ? "text-white" : ""
                    }`}
                  >
                    <strong>Email:</strong> {subscriber.email}
                  </p>
                  <p
                    className={`text-lg text-gray-800 ${
                      darkMode ? "text-white" : ""
                    }`}
                  >
                    <strong>{t("name")}:</strong> {subscriber.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
