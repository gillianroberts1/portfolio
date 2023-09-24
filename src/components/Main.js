import NavBar from "./NavBar.js";
import Hero from "./Hero.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./Skills.js";

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <Hero />
      <Skills/>
    </div>
  );
};

export default Main;
