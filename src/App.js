import React from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import NavbarSection from "./sections/NavbarSection";
import ProjectsSection from "./sections/ProjectsSection";
import StylesSection from "./sections/StylesSection";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavbarSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <StylesSection />
    </main>
  );
}

export default App;
