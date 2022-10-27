import Home from "./Pages/Home/Home";
import Login from "./Pages/Form/Login";
import Register from "./Pages/Form/Register";

import Workspace from "./Pages/ProductLayout/Workspace";
import Dashboard from "./Pages/Workspace/Dashboard";
import Kanban from "./Pages/Workspace/Kanban";
import Users from "./Pages/Workspace/Users";

import "./Styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workspace" element={<Workspace />}>
              <Route path="/workspace" element={<Dashboard />} />
              <Route path="/workspace/board" element={<Kanban />} />
              <Route path="/workspace/team" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
