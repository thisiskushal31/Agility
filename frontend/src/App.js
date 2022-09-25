import Home from "./Pages/Home/Home";
import Login from "./Pages/Form/Login";
import Signup from "./Pages/Form/Signup";

// import Product from "./Pages/ProductLayout/Product";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Styles/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;