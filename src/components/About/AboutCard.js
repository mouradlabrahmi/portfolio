import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Mourad Labrahmi </span>
            Software Engineer with more than <span className="purple">two years of experience</span>, 
            talented able to contribute to a 
            highly collabora- tive work environment, find solutions and determine customer satisfaction, 
            design and develop web services. 
            Passionate about Machine Learning and cloud technologies to develop smarter and more effective services.
            {/* with 2 years of experience as a <span className="purple"> Software engineer.</span> */}
            <br />After getting my engineering degree, I joined Mascir foundation to work on a research project
            with a highly talented team to design and develop a smart energy control system using AI,
            My main tasks were to develop a new machine learning models to predict the energy 
            consumption in real time and deploy them into a RESTApi on AWS and build 
            an entire web app to display usefull information and take the right decisions.
            This experience has taken more than 1 year and 4 months.
            <br />
            {/* After successfully completed the project I was supposed to get a remote role 
            and effectively I got it as a Backend engineer at Obytes to join a highly talented US based company, where 
            I'm working */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mourad Labrahmi</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
