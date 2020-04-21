import React from "react";

import styled from "styled-components";

import Phone from "../icons/Phone.js";
import Home from "../icons/Home.js";
import Facebook from "../icons/Facebook.js";
import Envelope from "../icons/Envelope.js";

const Container = styled.div`
    margin-bottom: 2rem;
`;

const Top = styled.div`
    background-color: rgba(46, 49, 49, 1);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const BigText = styled.h2`
    color: rgba(236, 236, 236, 1);
    font-size: 2rem;
`;

const SmallText = styled.h4`
    color: rgba(236, 236, 236, 1);
    font-style: italic;
    font-weight: 300;
`;

const Form = styled.form`
    display: inherit;
    align-items: inherit;
`;

const Input = styled.input`
    font-size: 1rem;
    padding: 0.6rem;
    border-radius: 0.2rem;
    margin-right: 2rem;
`;

const Button = styled.button`
    font-size: 1rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background-color: rgba(38, 106, 216, 1);
    border: none;
    :hover {
        color: rgba(236, 236, 236, 1); 
    }
`;

const Bottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BigColorText = styled.h2`
    color: rgba(38, 106, 216, 1);
    font-size: 2rem;
    margin-left: 0.3rem;
`;

const SmallColorText = styled.h4`
    color: rgba(46, 49, 49, 1);
    font-style: italic;
    font-weight: 300;
    margin: 0.3rem;
`;

const Tag = styled.a`
    text-decoration: none;
    color: rgba(46, 49, 49, 1);
    :hover {
        color: rgba(38, 106, 216, 1);
    }
`;

const IconBox = styled.div`
    display: inherit;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    background-color:rgba(38, 106, 216, 0.5);
    :hover {
        background-color:rgba(38, 106, 216, 1);
    }
`;

const Footer = () => {
    return (
        <Container>
            <Top>
                <BigText>Join The Party</BigText>
                <SmallText>Stay up to date! Receive our news and promotions in your inbox.</SmallText>
                <Form>
                    <Input type="text" placeholder="Enter Your Email" />
                    <Button>JOIN</Button>
                </Form>
            </Top>
            <Bottom>
                <Box id="times">
                    <BigColorText>Hours</BigColorText>
                    <SmallColorText>Monday - Wednesday 11am - 8pm</SmallColorText>
                    <SmallColorText>Thursday - Friday 11am - 9pm</SmallColorText>
                    <SmallColorText>Saturday 9am - 9pm</SmallColorText>
                    <SmallColorText>Sunday 9am - 8pm</SmallColorText>
                </Box>

                <Box>
                    <IconBox>
                        <Circle >
                            <a href='https://www.google.com/maps/place/3051+Nutley+St,+Fairfax,+VA+22031/@38.8707361,-77.263134,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64b8a8b8d7f89:0xc7c7246eebcb198f!8m2!3d38.8707361!4d-77.2609453' target='_blank' rel="noopener noreferrer"  title='View on Google Maps'><Home /></a>
                        </Circle>
                        <Circle>
                            <a href='tel:+1-703-560-9322' title='Give us a call!'><Phone /></a>
                        </Circle>
                        <Circle>
                            <a href='mailto:test@gmail.com' title='Send us an email'><Envelope /></a>
                        </Circle>
                        <Circle>
                            <a href='https://www.facebook.com/Pan-AM-Family-Restaurant-Inc-111595428879650/' title='Visit us on Facebook'><Facebook /></a>
                        </Circle>
                    </IconBox>
                    <SmallColorText>&copy; Panam Family Restaurant 2020</SmallColorText>
                    <SmallColorText>All rights reserved.</SmallColorText>
                    
                    <SmallColorText>Icons by <Tag href='https://fontawesome.com/' title="Visit Font Awesome's website">Font Awesome</Tag> and <Tag href='https://fontawesome.com/license' title="Visit Font Awesome's license page">license used.</Tag></SmallColorText>
                </Box>
            </Bottom>
        </Container>
    )
}

export default Footer;