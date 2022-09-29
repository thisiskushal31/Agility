import React from 'react';
import ProNavbar from './ProNavbar';

import Kanban from '../Workspace/Kanban';
import List from '../Workspace/List';
import Users from '../Workspace/Users';
import Support from '../Workspace/Support';

import { BrowserRouter as Outlet, Routes, Route } from 'react-router-dom';

export default function Product() {
  return (
    <>
        <ProNavbar />
        <Routes>
          <Route path='/' exact component={Kanban} />
          <Route path="list" element={List} />
          <Route path="team" element={Users} />
          <Route path="support" element={Support} />
        </Routes>
    </>
  )
}
