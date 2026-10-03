import React, { useEffect } from 'react';
import Home from "../components/home/home";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const MainContent = () => {
   useEffect(() => {
        document.title = "Petra Ivas";
    }, []);

  return (
    <main className="main">
      <Home />
      <Projects />
      <Skills />
    </main>
  );
};

export default MainContent;
