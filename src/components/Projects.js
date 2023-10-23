import { Container, Row, Col } from "react-bootstrap";
import projectImg1 from "../assets/img/SGARhome.png";
import projectImg2 from "../assets/img/BrewDogHome.png";
import ProjectCard from "./ProjectCard";
import projectImg3 from "../assets/img/ServivorsHome.png";
import colorSharp from "../assets/img/color-sharp.png";

const Projects = () => {
  const projects = [
    {
      title: "Recipes Website",
      description: "Group Project- October 23",
      stack: "React, MongoDB, Express, Node.js, 1st party API, Responsive ",
      imgUrl: projectImg1,
    },
    {
      title: "BrewDog Online Shop",
      description: "Solo project - September 23",
      stack: "React, MongoDB, Express, Node.js, 3rd party API",
      imgUrl: projectImg2,
    },
    {
      title: "Servivors Tennis Club Booking System",
      description: "Solo project - August 23",
      stack: "Python, PostgreSQL, Flask",
      imgUrl: projectImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              A selection of my projects completed during my CodeClan Course
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image" src={colorSharp} />
    </section>
  );
};

export default Projects;