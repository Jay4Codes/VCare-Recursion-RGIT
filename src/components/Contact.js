import React from "react";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";
import featurebg2 from "../images/background-shape/feature-bg-2.png";
import greenhalfcycle from "../images/background-shape/green-half-cycle.png";
import greendot from "../images/background-shape/green-dot.png";
import servicehalfcycle from "../images/background-shape/service-half-cycle.png";

function Contact() {
  return (
    <div>
      <Header />
      <section className="section-lg contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Contact</h2>
            </div>
          </div>
          <div className="row contact-bg p-5 rounded mb-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <form action="#">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  id="mail"
                  name="mail"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control mb-3"
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  value="send"
                  className="btn btn-secondary"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        <img
          className="contact-bg-1 up-down-animation"
          src={featurebg2}
          alt="background-shape"
        />
        <img
          className="contact-bg-2 left-right-animation"
          src={greenhalfcycle}
          alt="background-shape"
        />
        <img
          className="contact-bg-3 up-down-animation"
          src={greendot}
          alt="background-shape"
        />
        <img
          className="contact-bg-4 left-right-animation"
          src={servicehalfcycle}
          alt="background-shape"
        />
        <img
          className="contact-bg-5 up-down-animation"
          src={featurebg2}
          alt="background-shape"
        />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
