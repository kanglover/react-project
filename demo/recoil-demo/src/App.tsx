import React, { Suspense } from 'react';
import {Routes, Route, Link, useRoutes} from 'react-router-dom';
import logo from './logo.svg';
import routers from './routers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Suspense fallback={<div></div>}>
          <Link to="/recoil">Recoil / </Link>

          <Routes>
            {
              routers.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))
            }
          </Routes>

        {/* 可以用 useRoutes 钩子来替代 routes */}
        {useRoutes(routers)}

      </Suspense>
    </div>
  );
}

export default App;
