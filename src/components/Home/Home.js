import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/imgFI.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <p className="heading-name">
                Hi, I’m Federica, a Full-Stack Developer passionate about
                building modern web apps with the <strong>MERN stack</strong>,
                React, Next.js, and AI-powered solutions. I transform ideas into
                user-friendly, scalable, and innovative products.
              </p>
            </Col>

            <Col
              md={5}
              className="d-flex justify-content-center align-items-center"
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid profile-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
