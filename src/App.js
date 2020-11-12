import React from "react";
import "./App.css";

// components
import Nav from "./components/Nav.js";
import HomePage from "./components/HomePage.js";
import Menus from "./components/Menus.js";
import BreakfastMenu from "./components/BreakfastMenu.js";
import MainMenu from "./components/MainMenu.js";
import Reviews from "./components/Reviews.js";
import Footer from "./components/Footer.js";
import SimpleModal from "./components/modal.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <SimpleModal />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/menus">
        <Menus />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/main-menu">
        <MainMenu />
      </Route>
      <Route path="/breakfast-menu">
        <BreakfastMenu />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
