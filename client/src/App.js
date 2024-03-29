import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import { check } from './http/userAPI';
import AppRouter from './components/AppRouter';
import LeftNavs from './components/LeftNavs';
import NavBar from './components/NavBar';
import ModalApp from './components/Modal/ModalApp';
import { Spinner } from "react-bootstrap";
import './App.css';

const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally( () => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation = {"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <LeftNavs />
      <AppRouter />
      <ModalApp />
      WORKING APP.JS
    </BrowserRouter>
  );
});

export default App;
