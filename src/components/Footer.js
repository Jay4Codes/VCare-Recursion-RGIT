import React from "react";
import "./Footer.css";
import seoball2 from "../images/background-shape/seo-ball-2.png";

function Footer() {
  return (
    <div>
      <section className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Subscribe to our newsletter</h2>
              <p className="mb-5">Receive updates, news and deals</p>
            </div>
            <div className="col-lg-8 col-sm-10 col-12 mx-auto">
              <form action="#">
                <div className="input-wrapper position-relative">
                  <input
                    type="email"
                    className="newsletter-form"
                    id="newsletter"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    value="send"
                    className="btn btn-secondary newsletter-btn"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          className="newsletter-bg-shape left-right-animation"
          src={seoball2}
          alt="background-shape"
        />
      </section>
    </div>
  );
}

export default Footer;
