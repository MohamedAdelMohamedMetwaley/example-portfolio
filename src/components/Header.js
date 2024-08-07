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
        <img src="./images/placeholderP.png" alt="portfolio_image" />
      </div>
    </header>
  );
}
