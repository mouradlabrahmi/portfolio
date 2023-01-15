import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Img className="experience-image" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div className="cta">
          <Card.Title style={{marginTop:"1rem", marginLeft:"1rem"}}>{props.title}</Card.Title>
          <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginBottom:"1rem" }}
            >
              <CgWebsite /> &nbsp;
              {"Visit site"}
          </Button>
          </div>
        <Card.Text style={{ fontStyle: "italic", textAlign: "right"}}>{props.date}</Card.Text>
        <Card.Text>{props.job}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Visit site"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
