import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import { Aplicacion } from "./config/firebaseconfig";
import Login from './views/Login';
import HomeA from './views/HomeAdmin';

import Employees from './views/Employees';

import Inversions from './views/Inversions';
import Inversion from './views/Inversion';

import Profile from './views/Profile';

import FPass from './views/FPass';
import NewInversion from './views/createInversion';
import Register from './views/register';
import NewSale from './views/createSale';
import Sales from './views/Sales';
import Sale from './views/Sale';
import Notas from './views/Notas';
import Nota from './views/nota';

import Fotos from './views/fotos';
import Foto from './views/fotoy';
import SubirFoto from './views/tf';
import In from './views/info';


export default function App() {
  const [logged, setlogged] = useState(null)


  const logout = () => {
    firebase.auth().signOut()
    setlogged(null)
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user)
      if (user) {


        setlogged(true);


      } else {
        setlogged(null)
      }
    });
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => (logged ? <Redirect to="/Home" /> : <Login {...props} />)} />

        <Route exact path="/Home" render={(props) => (logged ?

          <HomeA {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Inversions" render={(props) => (logged ?

          <Inversions {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Inversion/:id" render={(props) => (logged ?

          <Inversion {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Profile" render={(props) => (logged ?

          <Profile {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Employees" render={(props) => (logged ?

          <Employees {...props} logout={logout} />

          : <Login {...props} />)} />



        <Route exact path="/NewInversion" render={(props) => (logged ?

          <NewInversion {...props} logout={logout} />

          : <Login {...props} />)} />


        <Route exact path="/NewSale" render={(props) => (logged ?

          <NewSale {...props} logout={logout} />

          : <Login {...props} />)} />


        <Route exact path="/Sales" render={(props) => (logged ?

          <Sales {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Sale/:id" render={(props) => (logged ?

          <Sale {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Notas" render={(props) => (logged ?

          <Notas {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Nota/:id" render={(props) => (logged ?

          <Nota {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/SubirFoto" render={(props) => (logged ?

          <SubirFoto  {...props} logout={logout} />

          : <Login {...props} />)} />


        <Route exact path="/Fotos" render={(props) => (logged ?

          <Fotos {...props} logout={logout} />

          : <Login {...props} />)} />


        <Route exact path="/Foto/:id" render={(props) => (logged ?

          <Foto {...props} logout={logout} />

          : <Login {...props} />)} />

        <Route exact path="/Info" render={(props) => (logged ?

          <In {...props} logout={logout} />

          : <Login {...props} />)} />
        <Route exact path='/FPass' component={FPass} />
        <Route exact path='/Register' component={Register} />


      </Switch>
    </BrowserRouter>
  );
};
