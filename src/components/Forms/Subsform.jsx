import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import Subsmodal from "../Modal/Subsmodal";
import { MyContext } from "../../context/MyContext";
import { useTranslation } from "react-i18next";
import "./Subsform.css";

export default function Subsform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { isModalOpen, toggleModal, darkMode, addSubscriber, toggleShowSubs } =
    useContext(MyContext);
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading(t("subs-in-progress"), {
      position: "top-right",
    });

    try {
      const response = await axios.get(
        "https://669693d20312447373c30fa2.mockapi.io/subscribers"
      );
      const existingSubscriptions = response.data;

      if (existingSubscriptions.some((sub) => sub.email === data.email)) {
        toggleModal(true);
        toast.dismiss(loadingToast);
        return;
      }

      const newSubscriber = await axios.post(
        "https://669693d20312447373c30fa2.mockapi.io/subscribers",
        data
      );

      addSubscriber(newSubscriber.data);
      toast.update(loadingToast, {
        render: t("subs-success"),
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      reset();
    } catch (error) {
      console.error("Error during subscription:", error);
      toast.update(loadingToast, {
        render: t("subs-error"),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div
      className={`form-container flex flex-col items-center justify-center w-full bg-[#4731d3] ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="w-[30%] rounded-lg p-6 max-xl:w-[40%] max-md:w-[50%] max-sm:w-[100%]">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          {t("subscription")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            {...register("email", {
              required: t("email-error"),
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: t("email-error"),
              },
            })}
            placeholder="Email"
            className="bg-white text-[#4731d3] border-0 rounded-md p-2 mb-4 focus:bg-[#caf281e0] focus:outline-none focus:ring-1 focus:ring-[#cbf281] transition ease-in-out duration-150"
            type="text"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-4">{errors.email.message}</p>
          )}

          <input
            {...register("name", {
              required: t("name-error"),
              maxLength: {
                value: 100,
                message: t("name-error"),
              },
            })}
            placeholder={t("name")}
            className="bg-white text-[#4731d3] border-0 rounded-md p-2 mb-4 focus:bg-[#caf281e0] focus:outline-none focus:ring-1 focus:ring-[#cbf281] transition ease-in-out duration-150"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mb-4">{errors.name.message}</p>
          )}

          <div className="flex items-center justify-between flex-wrap">
            <label
              className="text-sm text-white cursor-pointer"
              htmlFor="terms"
            >
              <input
                className="mr-2 accent-[#cbf281]"
                id="terms"
                type="checkbox"
                {...register("acceptTerms", {
                  required: t("terms-error"),
                })}
              />
              {t("terms")}
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="text-red-500 text-xs">{errors.acceptTerms.message}</p>
          )}

          <button
            className={`form-button bg-gradient-to-r from-[#cbf281] to-[#4731d3] text-white font-bold py-2 px-4 rounded-md mt-4 border-0 ${
              darkMode ? "bg-gradient-to-r from-[#252128] to-[#1a210b]" : ""
            }`}
            type="submit"
          >
            {t("subscribe")}
          </button>
        </form>
        <button
          className={`form-button bg-gradient-to-r from-[#4731d3] to-[#cbf281] text-white font-bold py-2 px-4 rounded-md mt-4 border-0 ${
            darkMode ? "bg-gradient-to-r from-[#252128] to-[#1a210b]" : ""
          }`}
          onClick={toggleShowSubs}
        >
          {t("show-subs-button")}
        </button>
      </div>

      <ToastContainer />

      {isModalOpen && <Subsmodal />}
    </div>
  );
}
