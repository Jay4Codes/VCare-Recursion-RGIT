import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./VideoRoom.css";

const Room = () => {
  return (
    <div>
      <Header />
      <div className="whereby section-lg">
        <iframe
          title="myFrame"
          src="https://coders-4-life.whereby.com/demo-c7dc196a-8f62-40dd-abeb-a5c2180f6543"
          allow="camera; microphone; fullscreen; speaker; display-capture"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
