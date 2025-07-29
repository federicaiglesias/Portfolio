import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import igourmet from "../../Assets/Projects/igourmet.png";
import igourmetadmin from "../../Assets/Projects/igourmetadmin.png";
import shifumi from "../../Assets/Projects/shifumi1.png";
import kidflix from "../../Assets/Projects/kidflix.png";
import Home2 from "../Home/Home2";
import courseapied from "../../Assets/Projects/courseapied.png";
import fuelup from "../../Assets/Projects/fuelup.png";

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
              imgPath={courseapied}
              isBlog={false}
              title="Course a pied"
              description={
                <>
                  Courses à Pied is a multilingual event website designed to
                  showcase and manage running events efficiently. Built with
                  Next.js 14, Supabase, and a headless CMS, it features dynamic
                  SEO metadata, responsive design, and event pagination for an
                  optimal user experience. The platform allows easy content
                  management, seamless navigation, and high performance,
                  achieving top scores on Lighthouse tests. 🚀
                </>
              }
              ghLink="https://github.com/federicaiglesias/courses-a-pied-uclic"
              demoLink="https://courses-a-pied-uclic.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuelup}
              isBlog={false}
              title="FuelUp – AI-Powered Recipe Generator for Athletes 🏋️‍♂️🥗"
              description={
                <>
                  FuelUp is a web app that generates personalized recipes for
                  athletes based on their personal data (age, weight, sport,
                  etc.) and available ingredients. It uses OpenAI’s API 🤖 to
                  create nutritious, performance-oriented meals. Built with
                  Next.js, React, TypeScript, Tailwind CSS, and Node.js/Express,
                  FuelUp delivers a smooth UX with a step-by-step form, dynamic
                  recipe display, and a modern, sporty design.
                </>
              }
              ghLink="https://github.com/federicaiglesias/fuelup"
              demoLink="https://fuelup-five.vercel.app/"
            />
          </Col>
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kidflix}
              isBlog={false}
              title="kidflix movies 🎬✨ "
              description={
                <>
                  I created the Kidflix platform to offer kids an exciting and
                  safe way to explore trailers of their favorite movies and
                  shows. Built using React, the app is designed with a playful
                  and user-friendly interface, ensuring a fun and smooth
                  experience. I focused on vibrant colors, simple navigation,
                  and engaging animations that make it easy for kids to enjoy.
                  With a responsive design, Kidflix works perfectly on any
                  device. Plus, each trailer is accompanied by cheerful sound
                  effects to add to the excitement!
                </>
              }
              ghLink="https://github.com/federicaiglesias/kidflix"
              demoLink="https://kidflix-kappa.vercel.app/"
            />
          </Col>
        </Row>
        <Home2 />
      </Container>
    </Container>
  );
}

export default Projects;
