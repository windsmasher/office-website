import React from 'react';
import { NavLink } from 'react-router-dom';
import { Config } from '../../config/config';
import { routes } from '../config/routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? ' router-link-exact-active' : ''}`;

const Navbar: React.FC = () => {
  return (
    <header>
      <h2 id="title">
        <p>GABINET PSYCHOTERAPII</p>
        <p>{Config.FullName.toUpperCase()}</p>
      </h2>
      <nav className="nav">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            end={route.index}
            className={navLinkClass}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
