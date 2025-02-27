import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  SiMysql,
  SiVite,
  SiRedux,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiReact />, name: "React" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiSocketdotio />, name: "Socket.io" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiMysql />, name: "MySQL" },
      ].map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div>{tech.icon}</div>
          <span style={{ fontSize: "1.5rem" }}>{tech.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
