import Project from "./Project";
import "./Projects.css";

export default function Projects({ refProps }) {
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
