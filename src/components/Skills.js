import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../logo.svg";
import skill2 from "../assets/img/js.png";
import skill3 from "../assets/img/python.png";
import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>Skills go in here</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>JavaScript </h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image" src={colorSharp} />
    </section>
  );
};
