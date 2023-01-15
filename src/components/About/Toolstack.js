import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiSentry,
  SiJirasoftware,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs"
import { CgLinear } from "react-icons/cg"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSentry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgLinear />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
    </Row>
  );
}

export default Toolstack;
