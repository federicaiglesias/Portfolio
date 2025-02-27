import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "federicaiglesias1@gmail.com"; // Sustituye con tu correo

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Se restablece después de 2 segundos
  };

  return (
    <Container>
      <Container fluid className="home-about-section" id="about">
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/federicaiglesias"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/federica-iglesias-inciarte-2a949323a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  onClick={handleEmailCopy}
                  className=" icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
                {emailCopied && (
                  <span style={{ color: "green", paddingLeft: "10px" }}>
                    Email copied!
                  </span>
                )}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
