import React from "react";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const SectionBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(38, 106, 216, 1);
    margin-bottom: 1rem;
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
    flex-wrap: wrap;  
`;

const TopText = styled.h2`
    color: rgba(236, 236, 236, 1);
    font-size: 2rem;
`;

const BottomText = styled.h4`
    color: rgba(46, 49, 49, 1);
    font-style: italic;
    font-weight: 300;
    margin-left: 3rem;
    margin-right: 3rem;
`;



const BreakfastMenu = () => {
    return (
        <Container>
            <h1>Breakfast menu here</h1>
            <SectionBox>
                <BoxTop>
                    <TopText>Omelets</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomText>Cheese Omelet</BottomText>
                    <BottomText>Mushroom and Cheese Omelet</BottomText>
                    <BottomText>Ham and Cheese Omelet</BottomText>
                    <BottomText>Western Omelet</BottomText>
                    <BottomText>Spinach and Feta Omelet</BottomText>
                    <BottomText>The Pan Am Omelet</BottomText>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Griddle</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomText>**Add fresh strawberries or blueberries with whipped cream to any of the below for $3. | Add home fries to any of the below for $2.**</BottomText>
                </BoxBottom>
                <BoxBottom>
                    <BottomText>Belgian Waffle</BottomText>
                    <BottomText>Pecan Waffle</BottomText>
                    <BottomText>Pancakes</BottomText>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Egg Platters</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomText>**Add fresh strawberries or blueberries with whipped cream to any of the below for $3. | Add home fries to any of the below for $2.**</BottomText>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Country Specials</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomText>Belgian Waffle</BottomText>
                    <BottomText>Pecan Waffle</BottomText>
                    <BottomText>Pancakes</BottomText>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Sides</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomText>Belgian Waffle</BottomText>
                    <BottomText>Pecan Waffle</BottomText>
                    <BottomText>Pancakes</BottomText>
                </BoxBottom>
            </SectionBox>
            
            <BottomText>**Consuming raw or undercooked meats, poultry, seafood, shellfish, eggs, or ceasar salad may increase your risk of food born illness. These items are cooked to customer preference.**</BottomText>
        </Container>
    )
}

export default BreakfastMenu;