import NavMenu from "./components/navMenu/NavMenu";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      {/* This component will scroll to top of the page on every Link transition */}
      <ScrollToTop />
      <NavMenu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
