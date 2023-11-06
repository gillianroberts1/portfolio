import { Col } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, stack, imgUrl, link, viewApp }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>{stack}</span>
          <br></br>
          <a className="play-app" href={link} target="_blank"
                  rel="noreferrer">{viewApp}</a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
