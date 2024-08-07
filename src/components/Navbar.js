export default function Navbar({
  onScroll,
  homeRef,
  projectsRef,
  skillsRef,
  contactRef,
}) {
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
