import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceWith from "./components/ExperienceWith";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceWith />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
