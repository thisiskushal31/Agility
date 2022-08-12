import React from "react";
import home from "../assets/Illustrations.svg";
import HeroShape from "../assets/Shape.png";
import Arrow from "../assets/arrow-right-line 1.png";
export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1 className="title">Task-manager for effective teams.</h1>
          <p className="description">
            Agilty is a simple to-do list for teams or businesses.
          </p>
          <div>
            <button class="CTA"> Get started for free <img class="arrow" src={Arrow} alt="Arrow" /></button>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img className="hero-image" src={home} alt="Hero_image" />
            <img className="hero-shape" src={HeroShape} alt="Hero_Shape" />
          </div>
        </div>
      </div>
    </div>
  );
}

