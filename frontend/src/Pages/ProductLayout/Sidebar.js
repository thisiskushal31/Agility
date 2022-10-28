import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/workspace',
    icon: <RiIcons.RiDashboardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Task Board',
    path: '/workspace/board',
    icon: <BsIcons.BsFillKanbanFill />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/workspace/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];

