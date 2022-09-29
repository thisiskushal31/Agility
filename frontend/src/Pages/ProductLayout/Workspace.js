import React from 'react';
import ProNavbar from './ProNavbar';

import {Outlet} from 'react-router-dom';

export default function Product() {
  return (
    <>
        <ProNavbar />
        <Outlet />
    </>
  )
}
