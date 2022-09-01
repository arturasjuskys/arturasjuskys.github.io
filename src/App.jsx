import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Slider from "./components/slider/Slider";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Slider />
        <Contact />
      </div>
    </div>
  );
}

export default App;
