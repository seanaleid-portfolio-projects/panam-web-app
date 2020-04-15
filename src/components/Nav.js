import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import Menus from "./Menus.js";
import Phone from "../icons/Phone.js";
import Home from "../icons/Home.js";
import Facebook from "../icons/Facebook.js";
import Envelope from "../icons/Envelope.js";

const Background = styled.div`
    
`;

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(46, 49, 49, 1);
`;

const Left = styled.div`
    display: inherit;
    align-items: center;
    margin-left: 2rem;
`;

const Right = styled.div`
    display: inherit;
    margin-right: 2rem;
`;

const Text = styled.h4`
    margin-left: inherit;
    margin-right: 1rem;
    justify-content: inherit;
    color: rgba(236, 236, 236, 1);
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    margin: 0.8rem;
    padding: 0.5rem;
    border-radius: 2rem;
    background-color:rgba(38, 106, 216, 0.5);
    :hover {
        background-color:rgba(38, 106, 216, 1);
    }
`;

const Nav = () => {
    return (
        <Background>
            <Bar>
                <Left>
                    <Home />
                    <Text>3051 Nutley St, Fairfax, VA 22031</Text>
                    <Text> | </Text>
                    <Phone />
                    <Text>(703) 560-9322</Text>
                </Left>
                <Right>
                    <Circle>
                        <a href='mailto:test@gmail.com' title='Send us an email'><Envelope /></a>
                    </Circle>
                    <Circle>
                        <a href='https://www.facebook.com/Pan-AM-Family-Restaurant-Inc-111595428879650/' title='Visit us on Facebook'><Facebook /></a>
                    </Circle>
                </Right>
            </Bar>
            <Link to="/menus">
                <Menus />
            </Link>
        </Background>
    )
}

export default Nav;