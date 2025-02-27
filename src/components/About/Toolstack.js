import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiSupabase,
  SiNotion,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNotion />, name: "Notion" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div>{tool.icon}</div>
          <span className="icons-name" style={{ fontSize: "1.5rem" }}>{tool.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

