// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "./ThemeContext";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Experience/>
        <Projects />
        <Service />
        <Certificates />
        <Education />
        <Testimonials />
        <Hireme />
        <Contact />
        <footer className="p-3 text-center">
          <p>muddasirRafique © All CopyRights Reserved 2025</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
