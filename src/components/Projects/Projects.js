import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import igourmet from "../../Assets/Projects/igourmet.png";
import igourmetadmin from "../../Assets/Projects/igourmetadmin.png";
import shifumi from "../../Assets/Projects/shifumi.png";
import Home2 from "../Home/Home2";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MY RECENT <strong className="purple">PROJECTS </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igourmet}
              isBlog={false}
              title="Igourmet - Full Stack E-commerce 🛒🧀"
              description={
                <>
                  <strong>Igourmet</strong> is a full-stack e-commerce platform
                  for premium cheeses, cured meats, and customizable charcuterie
                  boards. Developed during the Hack Academy Full Stack Intensive
                  Course, it features a modern UI, product catalog, shopping
                  cart with secure checkout, and an admin panel for managing
                  products and orders. Built with
                  <strong>React, Redux, Node.js, Express, and MySQL</strong>, it
                  delivers a seamless and intuitive shopping experience. 🚀
                </>
              }
              ghLink="https://github.com/federicaiglesias/igourmet-client"
              demoLink="https://igourmet-client.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igourmetadmin}
              isBlog={false}
              title="Igourmet - Admin Dashboard ⚙️📊"
              description={
                <>
                  Igourmet Admin Dashboard is a powerful management panel for
                  overseeing products, inventory, and orders in the e-commerce
                  platform. Built with **React, Redux, Node.js, Express, and
                  MySQL**, it provides an intuitive interface for admins to add,
                  edit, and remove products, track orders, and manage users
                  securely. Designed for efficiency, it ensures seamless
                  operations and a smooth administrative experience. 🚀
                </>
              }
              ghLink="https://github.com/federicaiglesias/igourmet-admin"
              demoLink="https://igourmet-admin.vercel.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shifumi}
              isBlog={false}
              title="Rock, Paper, Scissors App ✊📄✂️ "
              description={
                <>
                  I created this fun and interactive Rock, Paper, Scissors game
                  using React. I also designed the entire app to provide a
                  smooth and user-friendly experience. This app offers a
                  responsive and dynamic experience. My design focuses on
                  simplicity, clean visuals, and fun animations, with sound
                  effects to make it even more exciting! You play against a
                  computer opponent.🎯
                </>
              }
              ghLink="https://github.com/federicaiglesias/ShiFuMi"
              demoLink="https://shi-fu-mi-phi.vercel.app/"
            />
          </Col>
        </Row>
        <Home2 />
      </Container>
    </Container>
  );
}

export default Projects;
