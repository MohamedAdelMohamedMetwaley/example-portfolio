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
            I'm an Electrical Engineering student, passionate about Embedded
            Systems and AI.
          </p>
        </span>
        <button onClick={() => onScroll(projectsRef)}>See my work</button>
      </div>
      <div className="image-container">
        <img src="./images/Adham.webp" alt="portfolio_image" />
        <div>
          <a href="https://www.linkedin.com/in/adham-ehab-2003birth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090383086915">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </a>
          <a href="https://wa.me/201067072993">
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
          </a>
        </div>
      </div>
    </header>
  );
}
