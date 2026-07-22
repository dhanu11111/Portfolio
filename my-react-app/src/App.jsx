import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import CodingProfiles from "./sections/CodingProfiles";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"; 
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer/>
    </>
  );
}