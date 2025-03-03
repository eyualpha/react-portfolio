import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceWith from "./components/ExperienceWith";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceWith />
      <Projects />
      <Experience />
    </>
  );
};

export default App;
