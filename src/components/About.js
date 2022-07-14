import React from "react";
import "./About.css";
import Header from "./Header";
import Footer from "./Footer";
import team1 from "../images/team/team-1.png";
import team2 from "../images/team/team-2.png";
import team3 from "../images/team/team-3.png";
import teambg from "../images/backgrounds/team-bg.png";
import seoball1 from "../images/background-shape/seo-ball-1.png";
import teamtriangle from "../images/background-shape/team-bg-triangle.png";
import teamdots from "../images/background-shape/team-bg-dots.png";

function About() {
  return (
    <div>
      <Header />
      <section className="section-lg team" id="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Team</h2>
              <p className="mb-100">
                FIR Conversion and Translation Project by Team Coders4Life
                <br />
                for Codefiesta by SMVIT, Bengaluru - 2022{" "}
              </p>
            </div>
          </div>
          <div className="col-10 mx-auto">
            <div className="team-slider">
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team1}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Jay Jain</h4>
                    <h6 className="text-color">Developer</h6>
                  </div>
                </div>
                <p>
                  Just another guy programming my life for 20 years living in
                  the city Of dreams.
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team2}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Deep Patel</h4>
                    <h6 className="text-color">Developer</h6>
                  </div>
                </div>
                <p>
                  CSE Student At Dwarkadas J. Sanghvi college of Engineering
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team3}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Yash Joshi</h4>
                    <h6 className="text-color">Developer</h6>
                  </div>
                </div>
                <p>My determination is higher than my smartness.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={teambg} alt="team-bg" className="img-fluid team-bg" />
        <img
          className="team-bg-shape-1 up-down-animation"
          src={seoball1}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-2 left-right-animation"
          src={seoball1}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-3 left-right-animation"
          src={teamtriangle}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-4 up-down-animation img-fluid"
          src={teamdots}
          alt="background-shape"
        />
      </section>
      <Footer />
    </div>
  );
}

export default About;
