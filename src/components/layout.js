import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./layout.css"; // Assicurati di avere gli stili aggiornati

const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} /> Chi sono
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FontAwesomeIcon icon={faProjectDiagram} /> I miei progetti
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contatti
            </Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/tuoprofilo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tuoprofilo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
