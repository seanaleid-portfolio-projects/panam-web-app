import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import Menus from "./Menus.js";
import Phone from "../icons/Phone.js";
import Home from "../icons/Home.js";
import Envelope from "../icons/Facebook.js";
import Facebook from "../icons/Envelope.js";

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items; center;
`;

const Left = styled.div`
    display: inherit;
    align-items; inherit;
    margin-left: 2rem;
`;

const Right = styled.div`
    display: inherit;
`;

const Text = styled.h4`
    margin-left: inherit;
    justify-content: inherit;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    background-color: red;
`;

const Nav = () => {
    return (
        <div>
            <Bar>
                <Left>
                    <Text><Home />3051 Nutley St, Fairfax, VA 22031</Text>
                    <Text><Phone /> (703) 560-9322</Text>
                </Left>
                <Right>
                    <Circle>
                        <Envelope />
                    </Circle>
                    <Circle>
                        <Facebook />
                    </Circle>
                </Right>
            </Bar>
            <Link to="/menus">
                <Menus />
            </Link>
        </div>
    )
}

export default Nav;