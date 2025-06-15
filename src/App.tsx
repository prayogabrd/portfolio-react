// src/App.tsx
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competence from "./components/Competence";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Hero />
      <Competence />
      <Skills />
      <Project />
      <Footer />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
