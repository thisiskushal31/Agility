import Home from "./Pages/Home/Home";
import Login from "./Pages/Form/Login";
import Signup from "./Pages/Form/Signup";

import Workspace from "./Pages/ProductLayout/Workspace";
import Kanban from "./Pages/Workspace/Kanban";
import List from "./Pages/Workspace/List";
import Users from "./Pages/Workspace/Users";
import Support from "./Pages/Workspace/Support";

import "./Styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/workspace" element={<Workspace />}>
              <Route path="kanban" element={<Kanban />} />
              <Route path="list" element={<List />} />
              <Route path="team" element={<Users />} />
              <Route path="support" element={<Support />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
