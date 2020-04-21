import React from "react";

import styled from "styled-components";

import Menus from "./Menus.js";

const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  background-image: url('https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  width: 100%;
  height: 35rem;
`;

const Span = styled.span`
  background-color: rgba(46, 49, 49, 0.3);
  width: 50%;
  height: 100%;
`;

const HomePage = () => {
    return (
        <div>
            <Menus />
            <Background>
                <Span>This is a test</Span>
            </Background>
        </div>
    )
}

export default HomePage;