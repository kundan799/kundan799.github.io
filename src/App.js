import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Header } from "./component/Header/Header";
import { ThemeContext } from "./context/Theme";
import { useContext, useEffect } from "react";
import About from "./component/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./component/project/Project";
import { Contact } from "./component/Contact/Contact";
import { ScroolToTop } from "./component/ScroolToTop/ScroolToTop";

function App() {
  const [{ themename }] = useContext(ThemeContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={` app`}>
      <section id="#home" className="sticky">
        <Header />
      </section>
      <main>
        <About/>
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <ScroolToTop/>
    </div>
  );
}

export default App;
