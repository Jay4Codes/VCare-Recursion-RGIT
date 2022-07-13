import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import bannerimg from "../images/hero-area/banner-img.png";
import featurebg2 from "../images/background-shape/feature-bg-2.png";
import seoball1 from "../images/background-shape/seo-ball-1.png";
import seohalfcycle from "../images/background-shape/seo-half-cycle.png";
import greendot from "../images/background-shape/green-dot.png";
import bluehalfcycle from "../images/background-shape/blue-half-cycle.png";
import servicehalfcycle from "../images/background-shape/service-half-cycle.png";
import yellowtriangle from "../images/background-shape/yellow-triangle.png";
import teambgtriangle from "../images/background-shape/team-bg-triangle.png";
import service from "../images/service/service.png";
import servicebg from "../images/backgrounds/service-bg.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="hero-section hero" data-background="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center zindex-1">
              <h1 className="mb-3">
                Convert, Parse and
                <br />
                Translate FIRs
              </h1>
              <p className="mb-4">
                We provide services to convert, parse and translate FIR PDFs
                <br />
                and provide useful insights from them.
              </p>
              <Link to="/firtotext" className="btn btn-secondary btn-lg">
                FIR To Text
              </Link>
              <Link to="/translate" className="btn btn-secondary btn-lg">
                Translate
              </Link>
              <img
                className="img-fluid w-100 banner-image"
                src={bannerimg}
                alt="banner-img"
              />
            </div>
          </div>
        </div>
        <div id="scene">
          <img
            className="img-fluid hero-bg-1 up-down-animation"
            src={featurebg2}
            alt=""
          />
          <img
            className="img-fluid hero-bg-2 left-right-animation"
            src={seoball1}
            alt=""
          />
          <img
            className="img-fluid hero-bg-3 left-right-animation"
            src={seohalfcycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-4 up-down-animation"
            src={greendot}
            alt=""
          />
          <img
            className="img-fluid hero-bg-5 left-right-animation"
            src={bluehalfcycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-6 up-down-animation"
            src={seoball1}
            alt=""
          />
          <img
            className="img-fluid hero-bg-7 left-right-animation"
            src={yellowtriangle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-8 up-down-animation"
            src={servicehalfcycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-9 up-down-animation"
            src={teambgtriangle}
            alt=""
          />
        </div>
      </section>
      <section className="section-lg service">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 order-2 order-md-1">
              <h2 className="section-title">
                Powerful Layout From Top To Bottom
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <ul className="pl-0 service-list">
                <li>
                  <i className="ti-layout-tab-window text-purple"></i>Responsive
                  on any device
                </li>
                <li>
                  <i className="ti-layout-placeholder text-purple"></i>Very easy
                  to customize
                </li>
                <li>
                  <i className="ti-support text-purple"></i>Effective support
                </li>
              </ul>
            </div>
            <div className="col-md-7 order-1 order-md-2">
              <img className="img-fluid layer-3" src={service} alt="service" />
            </div>
          </div>
        </div>
        <img
          className="img-fluid service-bg"
          src={servicebg}
          alt="service-bg"
        />
        <img
          className="service-bg-shape-1 up-down-animation"
          src={servicehalfcycle}
          alt="background-shape"
        />
        <img
          className="service-bg-shape-2 left-right-animation"
          src={featurebg2}
          alt="background-shape"
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
