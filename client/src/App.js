import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import LeftNavs from './components/LeftNavs';
import NavBar from './components/NavBar';



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <LeftNavs />
      <AppRouter />
      WORKING APP.JS
    </BrowserRouter>
  );
}

export default App;
