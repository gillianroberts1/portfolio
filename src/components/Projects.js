import { Container, Row, Col } from "react-bootstrap";
import projectImg1 from "../assets/img/SGARhome.png";
import projectImg2 from "../assets/img/BrewDogHome.png";
import ProjectCard from "./ProjectCard";
import projectImg3 from "../assets/img/ServivorsHome.png";
import projectImg4 from "../assets/img/WiggleWaggyWalks.png";
import projectImg5 from "../assets/img/LouLousLibrary.png";
import projectImg6 from "../assets/img/tennis_order.png";

import colorSharp from "../assets/img/color-sharp.png";

const Projects = () => {
  const projects = [
    {
      title: "Sizzle & Grill Aromatic Recipes",
      description: "Group Project- October 23",
      stack: "React, MongoDB, Express, Node.js, 1st party API, Responsive ",
      imgUrl: projectImg1,
      link: "https://sgar.vercel.app/",
      viewApp: "PLAY APP",
    },
    {
      title: "BrewDog Online Shop",
      description: "Personal Project - September 23",
      stack: "React, MongoDB, Express, Node.js, 3rd party API, Responsive",
      imgUrl: projectImg2,
      link: "https://brew-dog-deployed.vercel.app/",
      viewApp: "PLAY APP",
    },
    {
      title: "Wiggle Waggy Walks",
      description: "Group Project - November 23",
      features: "Authentication, Image Upload, Real-time Chat",
      stack: "Java, Spring, Firebase, React",
      imgUrl: projectImg4,
    },
    {
      title: "SERVivors Tennis Club Booking System",
      description: "Solo Project - August 23",
      stack: "Python, PostgreSQL, Flask",
      imgUrl: projectImg3,
    },
    
    {
      title: "Lou Lou's Library",
      description: "Solo Project - July 23",
      stack: "Python, Flask",
      imgUrl: projectImg5,
    },
    {
      title: "Pink Floyd Tennis Shop",
      description: "Solo Project - July 23",
      stack: "Python, Flask",
      imgUrl: projectImg6,
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
