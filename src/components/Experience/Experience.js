import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import obytes from "../../Assets/experiences/obytes.jpeg";
import mascir from "../../Assets/experiences/mascir.jpeg";
import MentorGraphics from "../../Assets/experiences/mentor.jpeg";
import enova from "../../Assets/experiences/enova.png";
import ceit from "../../Assets/experiences/ceit.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={obytes}
              isBlog={false}
              title="Pawp(Remote) via Obytes"
              date={<p>Kenitra, April 2022 -- current"</p>}
              job={<h4 style={{color:"#8C52FF"}}>Backend developer</h4>}
              description={
              <>
              <br></br>
                <h5>Tasks:</h5>
                <ul>
                  <li>Develop new features for backend APIs using Django, Graphene, Pytest and Docker</li>
                  <li>Implement test cases for each functionality using Pytest</li>
                  <li>Develop and test new API Graphql endpoints</li>
                  <li>Fix bugs and Maintain and test existing functionalities</li>
                  <li>Refactor existing code</li>
                  <li>Build internal apps using Retool</li>
                  <li>Daily maintenance of code, debugging issues and solving clients prob- lems</li>
                  <li>Review open PRs and collaborate with highly skilled developers</li>
                </ul>
                </>
                }
              demoLink="https://pawp.com/"
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={mascir}
              isBlog={false}
              title="Mascir"
              date={<p>Rabat, Dec 2021 -- April 2022 "</p>}
              job={<h4 style={{color:"#8C52FF"}}>Software engineer - Research project</h4>}
              description={
                <>
              <br></br>
                <h5>Tasks:</h5>
              <ul>
                <li>Extract energy and weather data from APIs and sensors using Python scripts and Amazon Lambda function</li>
                <li>Build a hybrid model that increases the accuracy to more than 93% using Keras, Sciket-learn</li>
                <li>develop a REST API using Django Rest Framework that package and deploy the developed model</li>
                <li>develop an energy management system that monitor and control the energy consumption process and reduce the consumption by 21.23%.</li>
                <li>Develop an AWS cloud data infrastructure using S3, Lambda, Dy- namoDB, SageMaker and Quicksight</li>
              </ul>
              </>}
              demoLink="https://mascir.ma"
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={MentorGraphics}
              isBlog={false}
              title="Mentor Graphics"
              date={<p>Rabat, Fev 2020 -- Jul 2020"</p>}
              job={<h4 style={{color:"#8C52FF"}}>Graduation internship</h4>}
              description={
                <>
              <br></br>
                <h5>Tasks:</h5>
                <ul>
                  <li>Launch IC design test cases and analyze results.</li>
                  <li>Write Python, Tcl and bash scripts for testing 
                    timing engine of Nitro- SoC a Place and Route automation tool for integrated circuits design.</li>
                  <li>Build a test automation web application, using 
                    Flask Python web frame- work for back-end and HTML/CSS and JavaScript for the front-end.</li>
            
                </ul>
                </>
              }
              demoLink="https://eda.sw.siemens.com/"              
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={enova}
              isBlog={false}
              title="Enova R&T"
              date={<p>Rabat, Jul 2019 -- Sep 2019"</p>}
              job={<h4 style={{color:"#8C52FF"}}>Software developer intern</h4>}
              description="Develop a real-time application to control and monitor underwater
              drones using django for the Backend and React js for the Frontend.
              "
              demoLink="https://enova.ma"
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={ceit}
              isBlog={false}
              title="CEIT"
              date={<p>Casablanca, Jul 2018 -- Aug 2018"</p>}
              job={<h4 style={{color:"#8C52FF"}}>Web developer intern</h4>}
              description="Create a website to introduce touristic areas in Morocco, using HTML/CSS, and JavaScript."
              demoLink="https://www.inpt.ac.ma/fr/ceit"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
