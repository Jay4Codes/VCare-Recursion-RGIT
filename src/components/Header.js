import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo128.png";

function Header() {
  return (
    <div>
      <section className="navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to="/firtotext">
                    FIR To Text
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to="/translate">
                    Translation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to="/videoroom">
                    Video Room
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Header;
