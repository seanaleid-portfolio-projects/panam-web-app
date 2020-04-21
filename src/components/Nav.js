import React from "react";

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Phone from "../icons/Phone.js";
import Home from "../icons/Home.js";
import Clock from "../icons/Clock.js";
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
    padding: 0.4rem;
    justify-content: inherit;
    color: rgba(236, 236, 236, 1);
    :hover {
        background-color: rgba(38, 106, 216, 1);
        border-radius: 1rem;
        padding: 0.4rem;
    }
`;

const RegularText = styled.h4`
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0.4rem;
    justify-content: inherit;
    color: rgba(236, 236, 236, 1);
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    :hover {
        background-color:rgba(38, 106, 216, 1);
        
    }
`;

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-image: url('https://images.unsplash.com/photo-1531914082256-1b9047242426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    width: 100%;
    height: 50vh;
`;

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: center;
    color: rgba(236, 236, 236, 1);
`;

const TopRowLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0;
`;

const TopRowRight = styled.div`
    width: 30%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
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
    font-size: 1.3rem;
    font-weight: 500;
    color: rgba(236, 236, 236, 1);
    padding: 0.5rem;
    border-radius: 1rem;
    :hover {
        background-color: rgba(38, 106, 216, 1);
    }
`;

const NavHeader = styled.h1`
    font-size: 2.5rem;
`;

const Nav = () => {

    const path = useLocation();
    const url = Array.from(path.pathname).join('');
    const date = new Date();
    const day = date.getDay();
    
    const header = () => {
        if(url.includes('main-menu')) {
            return 'MAIN MENU'
        } else if (url.includes('menus')) {
            return 'MENUS'
        } else if (url.includes('breakfast-menu')) {
            return 'BREAKFAST MENU'
        } else if (url.includes('reviews')){
            return 'REVIEWS'
        } else {
            return 'HOME';
        }
    }

    const schedule = () => {
        if (day === 0){
            return 'Open today 9am - 8pm'
        } else if (day === 1 || 2 || 3) {
            return 'Open today 11am - 8pm'
        } else if (day === 4 || 5) {
            return 'Open today 11am - 9pm'
        } else if (day === 6){
            return 'Open today 9am - 9pm'
        }
    }

    return (
        <div>
            <Bar>
                <Left>
                    <Clock />
                    <RegularText>{schedule()} </RegularText>
                    <RegularText> | </RegularText>
                    <Home />
                    <ATag href='https://www.google.com/maps/place/3051+Nutley+St,+Fairfax,+VA+22031/@38.8707361,-77.263134,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64b8a8b8d7f89:0xc7c7246eebcb198f!8m2!3d38.8707361!4d-77.2609453' target='_blank' rel="noopener noreferrer"  title='View on Google Maps'><Text>3051 Nutley St, Fairfax, VA 22031</Text></ATag>
                    <RegularText> | </RegularText>
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
                <TopRow>
                    <TopRowLeft>
                        <Panam>
                            <StyledLinkBig to="/">PANAM</StyledLinkBig>
                        </Panam>
                        <Bottom>Family Restaurant</Bottom>
                    </TopRowLeft>
                    <TopRowRight>
                        <StyledLinkSmall to="/">Home</StyledLinkSmall>
                        <StyledLinkSmall to="/menus">Menus</StyledLinkSmall>
                        <StyledLinkSmall to="/reviews">Reviews</StyledLinkSmall>
                    </TopRowRight>
                </TopRow>
                <BottomRow>
                    <NavHeader>{header()}</NavHeader>
                </BottomRow>
            </Background>
        </div>
    )
}

export default Nav;