import React from 'react';
import './App.css';

import Nav from "./components/Nav.js";
import HomePage from "./components/HomePage.js";
import Menus from "./components/Menus.js";
import BreakfastMenu from "./components/BreakfastMenu.js";
import MainMenu from "./components/MainMenu.js";
import Reviews from "./components/Reviews.js";
import Footer from "./components/Footer.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/menus">
        <Menus />
      </Route>
      <Route exact path="/reviews">
        <Reviews />
      </Route>
      <Route exact path="/main-menu">
        <MainMenu />
      </Route>
      <Route exact path="/breakfast-menu">
        <BreakfastMenu />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
