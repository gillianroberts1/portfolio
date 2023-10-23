import { Col } from "react-bootstrap";
import "./ProjectCard.css";



const ProjectCard = ({title, description, stack, imgUrl}) => {

    return ( 
<Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl} alt="project-image"/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br></br>
            <span>{stack}</span>
        </div>
    </div>
</Col>

    );
}
 
export default ProjectCard;