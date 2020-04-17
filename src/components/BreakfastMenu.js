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


const BreakfastMenu = () => {
    return (
        <Container>
            <h1>Breakfast Menu</h1>
            <SectionBox>
                <BoxTop>
                    <TopText>Omelets</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Cheese Omelet*</BottomTextItem>
                    <BottomTextDescription>Choice of cheese: American, Provolone, Swiss, Feta, or Mozzarella, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>Mushroom and Cheese Omelet*</BottomTextItem>
                    <BottomTextDescription>Mushroom and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>Ham and Cheese Omelet*</BottomTextItem>
                    <BottomTextDescription>Ham and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>Western Omelet*</BottomTextItem>
                    <BottomTextDescription>Ham, green peppers, onions, and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>Spinach and Feta Omelet*</BottomTextItem>
                    <BottomTextDescription>Spinach and feta cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>The Pan Am Omelet*</BottomTextItem>
                    <BottomTextDescription>Tomato, onion, and feta cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Griddle</TopText>
                </BoxTop>
                <BoxBottom>

                    <BottomTextDescription>**Add fresh strawberries or blueberries with whipped cream to any of the below for $3. | Add Home Fries to any of the below for $2.**</BottomTextDescription>
                    <BottomTextDescription>**Add ons: 1) two eggs any style 2) bacon, sausage, or ham 3) bacon, sausage, or ham & two eggs any style**</BottomTextDescription>
                
                </BoxBottom>
                <BoxBottom>

                    <BottomTextItem>Belgian Waffle</BottomTextItem>
                    <BottomTextItem>Pecan Waffle</BottomTextItem>
                    <BottomTextItem>Pancakes</BottomTextItem>

                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Egg Platters</TopText>
                </BoxTop>
                <BoxBottom>

                    <BottomTextDescription>**Add bacon, sausage, or ham**</BottomTextDescription>

                    <BottomTextItem>One Egg any Style</BottomTextItem>
                    <BottomTextDescription>Served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>Two Eggs any Style</BottomTextItem>
                    <BottomTextDescription>Served with Home Fries and choice of Toast</BottomTextDescription>

                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Country Specials</TopText>
                </BoxTop>
                <BoxBottom>

                    <BottomTextItem>Sausage Gravy over Biscuits</BottomTextItem>
                    <BottomTextDescription>Served with Home Fries</BottomTextDescription>

                    <BottomTextItem>Creamed Chip Beef</BottomTextItem>
                    <BottomTextDescription>Over Toast, served with Home Fries</BottomTextDescription>

                    <BottomTextItem>Corned Beef Hash and Eggs*</BottomTextItem>
                    <BottomTextDescription>With Two Eggs any style, Toast and Home Fries</BottomTextDescription>

                    <BottomTextItem>Eggs Benedict*</BottomTextItem>
                    <BottomTextDescription>Poached Eggs, Canadian Bacon over English Muffin topped with Hollandaise Sauce and Home Fries</BottomTextDescription>

                    <BottomTextItem>Country Ham and Eggs*</BottomTextItem>
                    <BottomTextDescription>Served with Two Eggs any Style, Toast and Home Fries</BottomTextDescription>

                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Sides</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomTextItem>Toast, White, Wheat or Rye</BottomTextItem>
                    <BottomTextItem>Biscuit</BottomTextItem>
                    <BottomTextItem>English Muffin</BottomTextItem>
                    <BottomTextItem>Fruit Bowl</BottomTextItem>
                    <BottomTextItem>Home Fries</BottomTextItem>
                    <BottomTextItem>One Egg any Style</BottomTextItem>
                    <BottomTextItem>Two Eggs any Style</BottomTextItem>
                    <BottomTextItem>Sausage, Bacon, or Ham</BottomTextItem>
                    <BottomTextItem>Corned Beef Hash</BottomTextItem>
                    <BottomTextItem>Country Ham</BottomTextItem>
                </BoxBottom>
            </SectionBox>
            
            <BottomTextDescription>*Consuming raw or undercooked Meats, Poultry, Seafood, Shellfish, Eggs, or Caesar salad may increase your risk of food born illness. These Descriptions are cooked to customer preference.</BottomTextDescription>
        </Container>
    )
}

export default BreakfastMenu;