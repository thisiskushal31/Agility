import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';

function ProNavbar() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='productNavbar'>
          <div className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='sidebarSpan'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='logOutButton'>
              <button className='workspace-logoutButton' onClick={logOut} ><FaIcons.FaSignOutAlt/>Sign Out</button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default ProNavbar;
