import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

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

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
    width: 80%;
`;

const StyledLinkSmall = styled(Link)`
    text-decoration: none;
    color: rgba(46, 49, 49, 1);
    border: 3px solid rgba(38, 106, 216, 1);
    margin: 2rem;
`;

const MenusPic = styled.div`
    background: url('https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center; 
`;

const BreakfastMenu = styled.div`
    background: url('https://images.unsplash.com/photo-1475566718667-b6fe2e251c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center; 
`;

const Bar = styled.h2`
    background-color: rgba(38, 106, 216, 1);
    width: 100%;
    height: 2.5rem;
    font-size: 2rem;
    color: rgba(236, 236, 236, 1);
`;

const MainMenu = () => {
    return (
        <Container>
            <h1>Main Menu</h1>
            <SectionBox>
                <BoxTop>
                    <TopText>Appetizers</TopText>
                </BoxTop>
                <BoxBottom>

                    <BottomTextItem>Spanakopita</BottomTextItem>
                    <BottomTextDescription>Spinach and Feta Cheese Pie</BottomTextDescription>

                    <BottomTextItem>Dolmades</BottomTextItem>
                    <BottomTextDescription>Grape leaves stuffed with Rice</BottomTextDescription>
                    
                    <BottomTextItem>Pita with Tzagiki</BottomTextItem>
                    <BottomTextDescription>Cut Pit bread with Tzagiki Sauce</BottomTextDescription>

                    <BottomTextItem>Mozzarella Sticks</BottomTextItem>
                    <BottomTextDescription>Homemade Mozzarella Sticks</BottomTextDescription>

                    <BottomTextItem>Garlic Bread</BottomTextItem>
                    <BottomTextDescription>+Add on: Mozzerella Cheese</BottomTextDescription>

                    <BottomTextItem>Soup of the Day</BottomTextItem>
                    
                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Salads</TopText>
                </BoxTop>
                <BoxBottom>
                    <BottomTextItem>Chef Salad</BottomTextItem>
                    <BottomTextDescription>Ham, Turkey, Provolone, overLettuce, Tomato, Cucumber, Onions, and CHoice of Dressing</BottomTextDescription>

                    <BottomTextItem>*Grilled Chicken Salad</BottomTextItem>
                    <BottomTextDescription>Grilled Chicken over Lettuce, Tomato, Cucumber, Olives, and Hard Boiled Egg with Vinaigrette</BottomTextDescription>

                    <BottomTextItem>*Chicken Caesar Salad</BottomTextItem>
                    <BottomTextDescription>Grilled Chicken over Caesar Salad</BottomTextDescription>

                    <BottomTextItem>Greek Salad</BottomTextItem>
                    <BottomTextDescription>Lettuce, Tomato, Cucumber, Onion, Feta, Olives, and Creamy Mediterranean Dressing</BottomTextDescription>

                    <BottomTextItem>*Gyro Salad</BottomTextItem>
                    <BottomTextDescription>Our Gyro over a Large Greek Salad</BottomTextDescription>
                    
                    <BottomTextItem>Salad Bar</BottomTextItem>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Omelets</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>*Cheese Omelet</BottomTextItem>
                    <BottomTextDescription>Choice of cheese: American, Provolone, Swiss, Feta, or Mozzarella, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>*Mushroom and Cheese Omelet</BottomTextItem>
                    <BottomTextDescription>Mushroom and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>*Ham and Cheese Omelet</BottomTextItem>
                    <BottomTextDescription>Ham and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>*Western Omelet</BottomTextItem>
                    <BottomTextDescription>Ham, green peppers, onions, and American cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>*Spinach and Feta Omelet</BottomTextItem>
                    <BottomTextDescription>Spinach and feta cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                    <BottomTextItem>*The Pan Am Omelet</BottomTextItem>
                    <BottomTextDescription>Tomato, onion, and feta cheese, served with Home Fries and choice of Toast</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <BottomTextDescription>*Consuming raw or undercooked Meats, Poultry, Seafood, Shellfish, Eggs, or Caesar salad may increase your risk of food born illness. These items are cooked to customer preference.</BottomTextDescription>

            <MenuContainer>
                <StyledLinkSmall to="/menus" title='Go back to the menus page.'>
                    <MenusPic alt="A paper menu over a white table cloth.">
                        <Bar>Menus</Bar>
                    </MenusPic>
                </StyledLinkSmall>
                <StyledLinkSmall to="/breakfast-menu" title='Check out the breakfast menu.'>
                    <BreakfastMenu alt="A coffee, pastry, and glass of water on the table.">
                        <Bar>Breakfast Menu</Bar>
                    </BreakfastMenu>
                </StyledLinkSmall>
            </MenuContainer>

        </Container>
    )
}

export default MainMenu;