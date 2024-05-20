import { useNavigate } from "react-router-dom";
import About from "./components/ui/section/About";
import Experience from "./components/ui/section/Experience";
import Hero from "./components/ui/section/Hero";
import Projects from "./components/ui/section/Projects";
import Skills from "./components/ui/section/Skills";
import { useEffect, useRef } from "react";

function App() {
  const navigate = useNavigate();
  const scrollTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section");
        let currentSectionId = "";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 0) {
            currentSectionId = section.id;
          }
        });

        if (currentSectionId) {
          navigate(`/#${currentSectionId}`, { replace: true });
        }
      }, 100); // Delay in milliseconds (e.g., 100ms)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [navigate]);
  return (
    <>
      <Hero />

      <Skills />

      <Experience />

      <About />

      <Projects />
    </>
  );
}

export default App;
