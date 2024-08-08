import { useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

export default function App() {
  const homeRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const onScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        onScroll={onScroll}
        homeRef={homeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Header
        refProps={homeRef}
        onScroll={onScroll}
        projectsRef={projectsRef}
      />
      <Skills refProps={skillsRef} />
      <Projects refProps={projectsRef} />
      <Contact refProps={contactRef} />
    </>
  );
}
