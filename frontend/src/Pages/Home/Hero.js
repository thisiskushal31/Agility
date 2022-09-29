import React from "react";
import llustration from "../../Assets/illustration-intro.svg";
import { Link } from "react-router-dom";
export default function Hero(){
  return(
    <header className="hero">
    <section className="hero__home">
            <div className="hero__home--main">
              <div className="hero__home--article">
                <h1 className="hero__home--firstheading">bring everyone
                  together to build better products.
                </h1>
                <p className="hero__home--paragraph">
                  Agility makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <Link to="/signup" className="hero__home--cta">get started</Link>
              </div>
              <figure className="hero__home--picture">
                <img src={llustration} alt="Graphics" className="hero__home--img" />
              </figure>
            </div>
          </section>
    </header>
  )
}