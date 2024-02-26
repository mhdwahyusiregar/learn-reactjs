import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/index.css';

const navLinkStyle = {
  marginRight: '5px',
  marginLeft: '5px',
};

const RootLayout = () => {
  const getNavLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <>
      <NavLink className={getNavLinkClass} style={navLinkStyle} to={'/'}>
        Home
      </NavLink>
      |
      <NavLink className={getNavLinkClass} style={navLinkStyle} to={'/blog'}>
        Blog
      </NavLink>
      |
      <NavLink className={getNavLinkClass} style={navLinkStyle} to={'/about'}>
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
};

export default RootLayout;
