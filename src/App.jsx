import { MyContext, MyContextProvider } from "./context/MyContext";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Subsform from "./components/Forms/Subsform";
import SubsList from "./components/Forms/Subslist";
import { useContext } from "react";

function App() {
  const { showSubs } = useContext(MyContext);
  return (
    <>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <Subsform />
      {showSubs && <SubsList />}
    </>
  );
}

export default App;
