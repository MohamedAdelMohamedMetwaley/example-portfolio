import {
  faFacebookSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ refProps, onScroll, projectsRef }) {
  return (
    <header className="container" ref={refProps}>
      <div>
        <span className="textContainer" id="intro">
          <h1 className="text">Hello, I'm Adham</h1>
        </span>
        <span className="textContainer" id="description">
          <p className="text">
            I'm an Electrical Engineer, passionate about Embedded Systems and
            AI.
          </p>
        </span>
        <button onClick={() => onScroll(projectsRef)}>See my work</button>
      </div>
      <div className="image-container">
        <img src="./images/placeholderP.webp" alt="portfolio_image" />
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
          </a>
        </div>
      </div>
    </header>
  );
}
