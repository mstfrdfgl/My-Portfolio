import axios from "axios";
import i18next from "i18next";
import { createContext, useEffect, useReducer } from "react";
export const MyContext = createContext();

const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
  language: localStorage.getItem("language") || "en",
  isModalOpen: false,
  subscribers: [],
  loading: true,
  error: false,
  showSubs: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    case "SET_SUBSCRIBERS":
      return { ...state, subscribers: action.payload, loading: false };
    case "ADD_SUBSCRIBER":
      return { ...state, subscribers: [...state.subscribers, action.payload] };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SHOW_SUBS":
      return { ...state, showSubs: !state.showSubs };
    default:
      return state;
  }
};

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //dark mode
  useEffect(() => {
    if (state.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);

  //dil seçenekleri
  useEffect(() => {
    localStorage.setItem("language", state.language);
    i18next.changeLanguage(state.language);
  }, [state.language]);

  //aboneler listesi
  useEffect(() => {
    const fetchSubscribers = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await axios.get(
          "https://669693d20312447373c30fa2.mockapi.io/subscribers"
        );
        dispatch({ type: "SET_SUBSCRIBERS", payload: response.data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: true });
      }
    };
    fetchSubscribers();
  }, []);

  const changeLanguage = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
  };

  const toggleDarkMode = (mode) => {
    dispatch({ type: "SET_DARK_MODE", payload: mode });
  };

  const toggleModal = (isOpen) => {
    dispatch({ type: "TOGGLE_MODAL", payload: isOpen });
  };

  const addSubscriber = (subscriber) => {
    dispatch({ type: "ADD_SUBSCRIBER", payload: subscriber });
  };

  const toggleShowSubs = () => {
    dispatch({ type: "SHOW_SUBS" });
  };
  return (
    <MyContext.Provider
      value={{
        darkMode: state.darkMode,
        toggleDarkMode,
        language: state.language,
        changeLanguage,
        isModalOpen: state.isModalOpen,
        toggleModal,
        subscribers: state.subscribers,
        addSubscriber,
        loading: state.loading,
        error: state.error,
        showSubs: state.showSubs,
        toggleShowSubs,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
