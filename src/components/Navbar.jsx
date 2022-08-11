import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/Logo_2.svg";
export default function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <header>
      <div className="container navbar-container">
        <a href="/" className="logo-wrapper">
          <img src={logo} alt="logo" />
          <h1 classname="nav-title" >Agility</h1>
        </a>
      
        <nav>
          <ul className="nav-items">
              <li>
                <a href="/Blog">Blog</a>
              </li>
          </ul>
        </nav>
        <div className="nav-buttons">
            <a href="/Login" className="btn1 nav-btn">Login</a>
        </div>
      </div>
    </header>
  );
}
