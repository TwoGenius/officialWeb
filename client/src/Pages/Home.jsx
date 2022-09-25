import React from "react";
import "./home.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main id="landing">
      <div className="intro">
        <div className="introLeft">
          <h1 className="introHead">
            TWO
            <br />
            GENIUS
          </h1>
          <p className="introText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            eum eligendi consectetur illo, eius quis quod ipsum voluptatibus, in
            eaque consequuntur aperiam quas! Voluptatibus, cupiditate.
          </p>
          <div className="introBtns">
            <button className="enrollBtn">Enroll</button>
            <a href="www.google.com" className="exploreBtn">
              Explore
            </a>
          </div>
        </div>
        <div className="introRight">
          <Spline scene="https://prod.spline.design/CrutrhDHDPNtL6IF/scene.splinecode" />
        </div>
      </div>
    </main>
  );
}
