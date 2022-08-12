// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose } from "react-icons/md";
// import { ImSun } from "react-icons/im";
// import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/Logo_2.svg";
export default function Navbar() {
  // const [navState, setNavState] = useState(false);
  return (
    <header>
      <div className="container navbar-container">
        <a href="/" className="logo-wrapper">
          <img src={logo} alt="logo" />
          <h1 classname="nav-title">Agility</h1>
        </a>
        <div classname="nav-items">
          <ul className="nav-links">
            <li>
              <button className="btn1 " href="/Blog"> SignUp </button>
            </li>
            <li className="nav-buttons">
              <button href="/Login" className="btn2 nav-btn"> Login </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
