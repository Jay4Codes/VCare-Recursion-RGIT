import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './FirToText.css'

function FirToText() {
  return (
    <div>
      <Header />
      <div className="section-lg form">
        <form action="../../post" method="post" className="form">
          <input type="file" className="upload btn" placeholder="Upload FIR PDF File" accept="application/pdf" />
          <button type="submit" className="btn btn-secondary">Submit File</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FirToText;
