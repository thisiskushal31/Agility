import React from 'react';
import Navbar from './Navbar';
import DividerBar from './DividerBar';
import Sidebar from './Sidebar';

import Kanban from '../Kanban/Kanban';

import Todo from '../Todo/Todo';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Product() {
  return (
    <>
      <Navbar />
      <DividerBar />
      <Sidebar />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/todo" element={<Todo />} />
            <Route exact path="/kanban" element={<Kanban />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
