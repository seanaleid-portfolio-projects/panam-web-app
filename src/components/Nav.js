import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import Phone from "../icons/Phone.js";
import Home from "../icons/Home.js";
import Facebook from "../icons/Facebook.js";
import Envelope from "../icons/Envelope.js";

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

const ATag = styled.a`
    text-decoration: none;
    
`;

const Text = styled.h4`
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: inherit;
    color: rgba(236, 236, 236, 1);
    :hover {
        color: rgba(38, 106, 216, 1);
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(236, 236, 236, 0.5);
    }
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

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: url('https://images.unsplash.com/photo-1531914082256-1b9047242426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    width: 100%;
    height: 50vh;
`;

const BottomRowLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0;
`;

const BottomRowRight = styled.div`
    display: flex;
    align-items: baseline;
    margin-right: 2rem;
    text-decoration: none;
`;

const Panam = styled.h1`
    color:rgba(38, 106, 216, 1);
    font-size: 5rem;
    margin-top: 0;
    margin-bottom: 0;
    text-shadow: 0.3rem 0.3rem 0.4rem rgba(236, 236, 236, 0.5);
`;

const Bottom = styled.h4`
    color: rgba(236, 236, 236, 1);
    font-size: 2rem;
    margin-top: 0;
    font-style: italic;
    font-weight: 300;
`;

const StyledLinkBig = styled(Link)`
    text-decoration: none;
    color: rgba(38, 106, 216, 1);
`;

const StyledLinkSmall = styled(Link)`
    text-decoration: none;
    color: rgba(236, 236, 236, 1);
`;

const Nav = () => {
    return (
        <div>
            <Bar>
                <Left>
                    <Home />
                    <ATag href='https://www.google.com/maps/place/3051+Nutley+St,+Fairfax,+VA+22031/@38.8707361,-77.263134,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64b8a8b8d7f89:0xc7c7246eebcb198f!8m2!3d38.8707361!4d-77.2609453' target='_blank' rel="noopener noreferrer"  title='View on Google Maps'><Text>3051 Nutley St, Fairfax, VA 22031</Text></ATag>
                    <Text> | </Text>
                    <Phone />
                    <ATag href='tel:+1-703-560-9322' title='Give us a call!'><Text>(703) 560-9322</Text></ATag>
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
            <Background>
                <BottomRowLeft>
                    <Panam>
                        <StyledLinkBig to="/">PANAM</StyledLinkBig>
                    </Panam>
                    <Bottom>Family Restaurant</Bottom>
                </BottomRowLeft>
                <BottomRowRight>
                    <StyledLinkSmall to="/menus">Menus</StyledLinkSmall>
                    <StyledLinkSmall to="/reviews">Reviews</StyledLinkSmall>
                </BottomRowRight>
            </Background>
        </div>
    )
}

export default Nav;