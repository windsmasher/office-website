import React from 'react';
import Home from '../views/Home';
import AboutMe from '../views/AboutMe';
import AboutTherapy from '../views/AboutTherapy';
import MyOffer from '../views/MyOffer';
import Prices from '../views/Prices';
import Contact from '../views/Contact';
import CompanyInfo from '../views/CompanyInfo';

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactElement;
  index?: boolean;
}

/**
 * Central route configuration. Add new pages here – App and Navbar use this automatically.
 */
export const routes: RouteConfig[] = [
  { path: '/', label: 'Aktualności', element: <Home />, index: true },
  { path: '/moja-oferta', label: 'Moja oferta', element: <MyOffer /> },
  { path: '/o-mnie', label: 'O mnie', element: <AboutMe /> },
  { path: '/o-terapii', label: 'O terapii', element: <AboutTherapy /> },
  { path: '/cennik', label: 'Cennik', element: <Prices /> },
  { path: '/dane-firmy', label: 'Dane firmy', element: <CompanyInfo /> },
  { path: '/kontakt', label: 'Kontakt', element: <Contact /> },
];
