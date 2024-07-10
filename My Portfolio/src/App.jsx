import React from "react";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { MyContextProvider } from "./components/context/MyContext";

function App() {
  return (
    <MyContextProvider>
      <Header />
      <Skills />
    </MyContextProvider>
  );
}

export default App;
