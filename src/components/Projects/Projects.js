import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import recommandationsys from "../../Assets/Projects/recommandationsys.png";
import ecommapi from "../../Assets/Projects/ecomApi.png";
import suicide from "../../Assets/Projects/suicide.png";
import meetin from "../../Assets/Projects/meetin.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommapi}
              isBlog={false}
              title="E-commerce REST API"
              description="Built a RESTFull API for an ecommerce app that handle users authentication, 
              making orders and cart functionalities using 
              Django Rest Framework, JWT, Celery, Redis and Swagger UI and 
              unittest to implement test cases for each feature."
              ghLink="https://github.com/MouradLabrahmi/ecommerce-api"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommandationsys}
              isBlog={false}
              title="RecommendationSystem"
              description="Development of a movie recommendation system based on 
              movies seen by current visitors and other visitors using KNN, Collaborative filtering and Flask."
              ghLink="https://github.com/MouradLabrahmi/RecommendationSystem"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetin}
              isBlog={false}
              title="MeetIn"
              description="A video streaming chat application using Django, Agora SDK and JavaScript."
              ghLink=""
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face recognition app"
              description="A python app that recognize people faces."
              ghLink="https://github.com/MouradLabrahmi/Face-recognition"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="--"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="--"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
