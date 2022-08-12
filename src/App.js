// import React, { useState, useEffect } from "react";
// import Clients from "./components/Clients";
// import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
// import Feature from "./components/Feature";
function App() {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Feature />
      {/* <Clients /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
