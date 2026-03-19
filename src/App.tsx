import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './config/routes';

const App: React.FC = () => {
  return (
    <>
      <div className="app-inner">
        <Navbar />
        <div className="content">
          <Routes>
            {routes.map((route) =>
              route.index ? (
                <Route key={route.path} index element={route.element} />
              ) : (
                <Route key={route.path} path={route.path} element={route.element} />
              )
            )}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
