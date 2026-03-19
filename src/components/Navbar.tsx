import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Config } from '../../config/config';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? ' router-link-exact-active' : ''}`;

const Navbar: React.FC = () => {
  return (
    <div>
      <h2 id="title">
        <p>GABINET PSYCHOTERAPII</p>
        <p>{Config.FullName.toUpperCase()}</p>
      </h2>
      <Nav fill>
        <Nav.Item>
          <NavLink to="/" end className={navLinkClass}>Aktualności</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/moja-oferta" className={navLinkClass}>Moja oferta</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/o-mnie" className={navLinkClass}>O mnie</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/o-terapii" className={navLinkClass}>O terapii</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/cennik" className={navLinkClass}>Cennik</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/dane-firmy" className={navLinkClass}>Dane firmy</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/kontakt" className={navLinkClass}>Kontakt</NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
