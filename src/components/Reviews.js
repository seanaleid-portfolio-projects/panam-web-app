import React from 'react';

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

const SectionBox = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    border: 3px solid rgba(38, 106, 216, 1);
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;

const BoxTop = styled.div`
    width: 100%;
    display: inherit;
    justify-content: center;
    background-color: rgba(38, 106, 216, 1);
`;

const BoxBottom = styled.div`
    width: 100%;
    display: inherit;
    flex-direction: column;
`;

const TopText = styled.h2`
    color: rgba(236, 236, 236, 1);
    font-size: 2rem;
    font-weight: 800;
`;

const BottomTextItem = styled.h3`
    color: rgba(46, 49, 49, 1);
    font-weight: 600;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 0rem;
`;

const BottomTextDescription = styled.h4`
    color: rgba(46, 49, 49, 1);
    font-style: italic;
    font-weight: 400;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
`;

const Reviews = () => {
    return (
        <Container>
            <SectionBox>
                <BoxTop>
                    <TopText>Amazing Greek Food!</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextDescription> I ordered spanakopita and pastitcio for delivery. The spanakopita was a large portion. The béchamel sauce on the pastitcio was delicious. The ordering and delivery was quick. Will definitely be ordering again!</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
        </Container>
    )
}

export default Reviews;