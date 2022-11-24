import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';
import Login from './pages/Login';



export default function Router() {
  return (
    <Switch>
      <Route path="/cars">
        <AppCars />
      </Route>
      <Route path="/add">
        <AddCar />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}