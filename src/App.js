import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
// import Feature from "./components/Feature";
function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Feature />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
