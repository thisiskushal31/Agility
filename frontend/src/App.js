import Home from "./Pages_/Home/Home";
import Login from "./Pages_/Form/Login";
import Signup from "./Pages_/Form/Signup";

import Workspace from "./Pages_/ProductLayout/Workspace";
// import Kanban from "./Pages/Workspace/Kanban";
// import List from "./Pages/Workspace/List";
// import Users from "./Pages/Workspace/Users";
// import Support from "./Pages/Workspace/Support";

import "./Styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/workspace/*" element={<Workspace />} />
            {/* <Route path="kanban" element={<Kanban />} />
            <Route path="list" element={List} />
            <Route path="team" element={Users} />
            <Route path="support" element={Support} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
