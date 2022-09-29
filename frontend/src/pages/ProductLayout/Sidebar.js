import React from 'react';

import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";

export const Sidebar = [
  {
    title: 'Board',
    path: '/workspace/board',
    icon: <BsIcons.BsFillKanbanFill />,
    cName: 'nav-text'
  },
  {
    title: 'Task List',
    path: '/workspace/list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/workspace/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/workspace/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

