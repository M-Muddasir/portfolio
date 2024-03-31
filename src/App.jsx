// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";
import CV from "./components/cv";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const getPathname = () => {
    console.log(window.location.pathname)
    return window.location.pathname;
  };
  return (
    <div>
      {getPathname() !== '/cv'? <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience/>
      <Projects />
      <Service />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <p>muddasirRafique © All CopyRights Reserved 2023</p>
      </footer>
      </>: <CV />}

    </div>
  );
};

export default App;
