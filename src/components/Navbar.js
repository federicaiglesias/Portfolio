import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";  // Importamos el hook

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isMobile = useIsMobile(); // Detectar si la pantalla es pequeña

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    updateExpanded(false); // Cerrar menú al hacer clic
  };

  return (
    <div className="navbar-container">
      <Navbar
        expanded={expand}
        expand="md"
        className={navColour ? "sticky navbar" : "navbar"}
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              {isMobile ? (
                <Nav.Link onClick={() => scrollToSection("home")}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Home</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Home</span>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {isMobile ? (
                <Nav.Link onClick={() => scrollToSection("about")}>
                  <FaCode style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Tech Skillset</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <FaCode style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Tech Skillset</span>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {isMobile ? (
                <Nav.Link onClick={() => scrollToSection("project")}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Projects</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Projects</span>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {isMobile ? (
                <Nav.Link onClick={() => scrollToSection("resume")}>
                  <CgFileDocument style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Resume</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} />
                  <span className="ms-2">Resume</span>
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
