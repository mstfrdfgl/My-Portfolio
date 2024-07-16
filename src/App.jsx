import { MyContextProvider } from "./context/MyContext";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Subsform from "./components/Forms/Subsform";

function App() {
  return (
    <MyContextProvider>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <Subsform />
    </MyContextProvider>
  );
}

export default App;
