import React from "react";
import { motion } from "framer-motion";
import Navigation from "./components/ui/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Chess Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="chess-board-bg h-full w-full"></div>
      </div>
    </div>
  );
}

export default App;
