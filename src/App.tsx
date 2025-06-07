import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competence from "./components/Competence";
import Skills from "./components/Skill.tsx";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Competence />
      <Skills />
    </>
  );
};

export default App;
