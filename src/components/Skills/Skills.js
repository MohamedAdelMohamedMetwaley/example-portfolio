import "./Skills.css";
import Skill from "./Skill";
import {
  faTools,
  faProjectDiagram,
  faDraftingCompass,
  faMicrochip,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "Proteus", icon: faTools },
  { name: "Multisim", icon: faProjectDiagram },
  { name: "Orcad", icon: faDraftingCompass },
  { name: "Altium", icon: faMicrochip },
  { name: "Embedded C", icon: faCode },
  { name: "Python", icon: faPython },
  { name: "AVR / ARM", icon: faMicrochip },
];

function Skills({ refProps }) {
  return (
    <section ref={refProps} className="skills container">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            size={"2x"}
            key={skill.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
