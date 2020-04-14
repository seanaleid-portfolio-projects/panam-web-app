import React from 'react';
import './App.css';

import Nav from "./components/Nav.js";
import Menus from "./components/Menus.js";
import Footer from "./components/Footer.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/menus">
        <Menus />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
