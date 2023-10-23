import NavBar from "./NavBar.js";
import Hero from "./Hero.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./Skills.js";
import Projects from "./Projects.js";

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
