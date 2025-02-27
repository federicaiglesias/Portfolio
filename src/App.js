import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useIsMobile from "./hooks/useIsMobile"; // Hook para detectar tamaño de pantalla
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const isMobile = useIsMobile(); // Detectar si la pantalla es pequeña

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {!isMobile && <Navbar />} {/* 🔹 Se oculta el Navbar en móvil */}

        <ScrollToTop />

        {isMobile ? (
          <div>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="project">
              <Projects />
            </section>
            <section id="resume">
              <Resume />
            </section>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}


export default App;
