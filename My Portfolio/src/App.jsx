import { MyContextProvider } from "./components/context/MyContext";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <MyContextProvider>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </MyContextProvider>
  );
}

export default App;
