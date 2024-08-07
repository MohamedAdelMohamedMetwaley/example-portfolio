import ScrollReveal from "scrollreveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function Skill({ name, icon, size }) {
  useEffect(function () {
    ScrollReveal().reveal(".skill-card", { reset: true });
  }, []);
  return (
    <div class="skill-card">
      <FontAwesomeIcon icon={icon} size={size} />
      <p>{name}</p>
    </div>
  );
}

export default Skill;
