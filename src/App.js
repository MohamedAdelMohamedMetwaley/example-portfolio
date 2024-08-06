import "./index.css";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";

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
      <Projects refProps={projectsRef} />
    </>
  );
}

function Navbar({ onScroll, homeRef, projectsRef, skillsRef, contactRef }) {
  return (
    <>
      <img className="gear" src="./images/cog.png" alt="gear" />
      <nav>
        <button
          onClick={() => onScroll(homeRef)}
          style={{ borderRadius: "25px 0 0 25px" }}
        >
          Home
        </button>
        <button onClick={() => onScroll(projectsRef)}>Projects</button>
        <button onClick={() => onScroll(skillsRef)}>Skills</button>
        <button
          onClick={() => onScroll(contactRef)}
          style={{ borderRadius: "0 25px 25px 0" }}
        >
          Contact
        </button>
      </nav>
    </>
  );
}

function Header({ refProps, onScroll, projectsRef }) {
  return (
    <header className="container" ref={refProps}>
      <div>
        <span className="textContainer" id="intro">
          <h1 className="text">Hello, I'm Adham</h1>
        </span>
        <span className="textContainer" id="description">
          <p className="text">
            I'm an Electrical Engineering student, passionate about Embedded
            Systems and AI.
          </p>
        </span>
        <button onClick={() => onScroll(projectsRef)}>See my work</button>
      </div>
      <div className="image-container">
        <div id="hexagon">
          <img
            src="./images/nobackground-photo.png"
            alt="portfolio_image"
            height={"400px"}
          />
        </div>
      </div>
    </header>
  );
}

function Projects({ refProps }) {
  return (
    <section className="container" ref={refProps} id="projects">
      <Project
        name={"Wireless controlled Light"}
        image={"./images/project1.jpg"}
        imageOnRight={false}
        key={1}
      >
        Working with team we achieved the full mark facing the deadline in just
        2 days, The project is about controling an RGB led using a mobile
        application, including the light intensity and the degree of the color.
      </Project>
      <Project
        name={"Digital Filter and Sound editing"}
        image={"./images/project2.jpg"}
        key={2}
      >
        Used MATLAB to design a full system:
        <br />
        <br />
        <ul>
          <li>Transmitter : sending sound.</li>
          <li>Channel : affecting signal and adding random noise.</li>
          <li>Receiver : Filtering and Reshaping signal.</li>
        </ul>
      </Project>
      <Project
        name={"Wireless controlled Light"}
        image={"./images/project1.jpg"}
        imageOnRight={false}
        key={3}
      >
        Working with team we achieved the full mark facing the deadline in just
        2 days, The project is about controling an RGB led using a mobile
        application, including the light intensity and the degree of the color.
      </Project>
      <Project
        name={"Digital Filter and Sound editing"}
        image={"./images/project2.jpg"}
        key={4}
      >
        Used MATLAB to design a full system:
        <br />
        <br />
        <ul>
          <li>Transmitter : sending sound.</li>
          <li>Channel : affecting signal and adding random noise.</li>
          <li>Receiver : Filtering and Reshaping signal.</li>
        </ul>
      </Project>
    </section>
  );
}

function Project({ name, image, imageOnRight = true, children }) {
  const [windowWidth] = useState(window.innerWidth);
  const img = <img src={image} alt={name} />;
  const sliderClass = `slider${imageOnRight ? "Reverse" : ""}`;
  const onMobile = windowWidth < 1024;

  useEffect(() => {
    ScrollReveal().reveal(`.${sliderClass}`, {
      delay: onMobile ? 100 : 200,
      distance: "100px",
      origin: `${imageOnRight ? "right" : "left"}`,
      viewFactor: onMobile ? 0.3 : 0.5,
      reset: true,
    });
  }, [imageOnRight, sliderClass, onMobile]);

  return (
    <div className={`project ${sliderClass}`}>
      {(!imageOnRight || onMobile) && img}
      <div>
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
      {imageOnRight && !onMobile && img}
    </div>
  );
}
