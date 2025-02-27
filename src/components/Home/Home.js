import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/imgFI.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

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

              <h1 className="heading-name">
                I'M <strong className="main-name">FEDERICA IGLESIAS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="mb-4">
                <Type />
              </div>
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
