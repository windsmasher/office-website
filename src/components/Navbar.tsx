import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Config } from '../../config/config';
import { routes } from '../config/routes';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <NavLink to="/" end className="site-header__brand">
          <span className="site-header__brand-label">Gabinet Psychoterapii</span>
          <span className="site-header__brand-name">{Config.FullName}</span>
        </NavLink>

        <button
          className={`site-header__toggle${isOpen ? ' site-header__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${isOpen ? ' site-nav--open' : ''}`}>
          {routes.map((route) =>
            route.path === '/kontakt' ? (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.index}
                className="site-nav__cta"
              >
                {route.label}
              </NavLink>
            ) : (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.index}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                }
              >
                {route.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
