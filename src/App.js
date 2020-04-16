import React from 'react';
import './App.css';

import Nav from "./components/Nav.js";
import Menus from "./components/Menus.js";
import BreakfastMenu from "./components/BreakfastMenu.js";
import MainMenu from "./components/MainMenu.js";
import Reviews from "./components/Reviews.js";
import Footer from "./components/Footer.js";

import { Route } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  background-color: pink;
`;

const Text = styled.h1`
  color: rgba(46, 49, 49, 1);
`;

function App() {
  return (
    <div className="App">
      <Nav />
      <Background>
        <Text>This is a test</Text>
      </Background>
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
