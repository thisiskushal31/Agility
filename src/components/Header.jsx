import logo from "../assets/logo.svg";
import llustration from "../assets/illustration-intro.svg";
export default function Navbar() {
  return (
    <header className="header">
    <section className="header__topMobile header--fixed" id="headerTop">
      <div className="header__topMobile--main">
        <a href="#" className="header__topMobile--brand">
          <img src={logo} alt="manage logo" className="header__topMobile--img"/>
        </a>
        <button className="header__topMobile--burger" id="btnBurger">
          <div className="header__topMobile--bar"></div>
          <div className="header__topMobile--bar"></div>
          <div className="header__topMobile--bar"></div>
        </button>
        <nav className="header__topMobile--nav" id="nav">
          <ul className="header__topMobile--menu">
            <li className="header__topMobile--list">
              <a href="#" className="header__topMobile--link">pricing</a>
            </li>
            <li className="header__topMobile--list">
              <a href="#" className="header__topMobile--link">product</a>
            </li>
            <li className="header__topMobile--list">
              <a href="#" className="header__topMobile--link">about us</a>
            </li>
            <li className="header__topMobile--list">
              <a href="#" className="header__topMobile--link">careers</a>
            </li>
            <li className="header__topMobile--list">
              <a href="#" className="header__topMobile--link">community</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section className="header__topDesktop" id="headerTopDesktop">
      <div className="header__topDesktop--main">
        <a href="#" className="header__topDesktop--brand">
          <img src={logo} alt="Manage logo" className="header__topDesktop--img"/>
        </a>
        <nav className="header__topDesktop--nav">
          <ul className="header__topDesktop--menu">
            <li className="header__topDesktop--list">
              <a href="#" className="header__topDesktop--link">pricing</a>
            </li>
            <li className="header__topDesktop--list">
              <a href="#" className="header__topDesktop--link">product</a>
            </li>
            <li className="header__topDesktop--list">
              <a href="#" className="header__topDesktop--link">about us</a>
            </li>
            <li className="header__topDesktop--list">
              <a href="#" className="header__topDesktop--link">careers</a>
            </li>
            <li className="header__topDesktop--list">
              <a href="#" className="header__topDesktop--link">community</a>
            </li>
          </ul>
        </nav>
        <button className="header__topDesktop--button">Login</button>
      </div>
    </section>
    <section className="header__home">
      <div className="header__home--main">
        <div className="header__home--article">
          <h1 className="header__home--firstheading">bring everyone
            together to build better products.
          </h1>
          <p className="header__home--paragraph">
            Agility makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.
          </p>
          <a href="#" className="header__home--cta">get started</a>
        </div>
        <figure className="header__home--picture">
          <img src={llustration} alt="Graphics photo" className="header__home--img"/>
        </figure>
      </div>
    </section>
  </header>
  );
}
