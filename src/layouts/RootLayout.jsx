import { NavLink, Outlet } from 'react-router-dom';
import '../styles/index.css';

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        style={{ marginRight: '5px' }}
        to={'/'}
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        style={{ marginRight: '5px', marginLeft: '5px' }}
        to={'/blog'}
      >
        Blog
      </NavLink>
      |{' '}
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        style={{ marginLeft: '5px' }}
        to={'/about'}
      >
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
// outlet untuk menampung semua halaman yg menjadi children
