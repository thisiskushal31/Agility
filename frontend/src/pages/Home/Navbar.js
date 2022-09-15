import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {

  // to change burger classes
  const [navbar__topMobile_bar, setBurgerClass] = useState("burger-bar unclicked")
  const [navbar__topMobile_nav, setMenuClass] = useState("toggleMenu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("toggleMenu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("toggleMenu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <header className="navbar">
      <section className="navbar__topMobile navbar--fixed" id="headerTop">
        <div className="navbar__topMobile--main">
          <Link to="/" className="navbar__topMobile--brand">
            <img src={logo} alt="manage logo" className="navbar__topMobile--img" />
          </Link>
          <button onClick={updateMenu} className="navbar__topMobile_burger" id="btnBurger">
            <div className={navbar__topMobile_bar}></div>
            <div className={navbar__topMobile_bar}></div>
            <div className={navbar__topMobile_bar}></div>
          </button>
          <nav className={navbar__topMobile_nav} id="nav">
            <ul className="navbar__topMobile--menu">
              <li className="navbar__topMobile--list">
                <Link to="/" className="navbar__topMobile--link">pricing</Link>
              </li>
              <li className="navbar__topMobile--list">
                <Link to="/" className="navbar__topMobile--link">product</Link>
              </li>
              <li className="navbar__topMobile--list">
                <Link to="/" className="navbar__topMobile--link">about us</Link>
              </li>
              <li className="navbar__topMobile--list">
                <Link to="/" className="navbar__topMobile--link">careers</Link>
              </li>
              <li className="navbar__topMobile--list">
                <Link to="/" className="navbar__topMobile--link">community</Link>
              </li>
              <li>
                <Link to="/login"> <button type="button" className="navbar__topDesktop--button">Login</button></Link>
                <Link to="/signup"> <button type="button" className="navbar__topDesktop--button">Signup</button></Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="navbar__topDesktop" id="headerTopDesktop">
        <div className="navbar__topDesktop--main">
          <Link to="/" className="navbar__topDesktop--brand">
            <img src={logo} alt="Manage logo" className="navbar__topDesktop--img" />
          </Link>
          <nav className="navbar__topDesktop--nav">
            <ul className="navbar__topDesktop--menu">
              <li className="navbar__topDesktop--list">
                <Link to="/" className="navbar__topDesktop--link">pricing</Link>
              </li>
              <li className="navbar__topDesktop--list">
                <Link to="/" className="navbar__topDesktop--link">product</Link>
              </li>
              <li className="navbar__topDesktop--list">
                <Link to="/" className="navbar__topDesktop--link">about us</Link>
              </li>
              <li className="navbar__topDesktop--list">
                <Link to="/" className="navbar__topDesktop--link">careers</Link>
              </li>
              <li className="navbar__topDesktop--list">
                <Link to="/" className="navbar__topDesktop--link">community</Link>
              </li>
            </ul>
          </nav>
          <Link to="/login"> <button type="button" className="navbar__topDesktop--button">Login</button></Link>
        </div>
      </section>  
    </header>
  );
}
