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

            <SectionBox>
                <BoxTop>
                    <TopText>Gyro and Souvlaki</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>*Chicken, Pork, or Gyro Platter</BottomTextItem>
                    <BottomTextDescription>Choice of marinated Chicken, Pork tenderloin, or Seasoned Gyro with a side Greek Salad, French Fries and Pita Bread</BottomTextDescription>

                    <BottomTextItem>*Chicken, Pork, or Gyro Sandwich</BottomTextItem>
                    <BottomTextDescription>Choice of marinated Chicken, Pork tenderloin or Seasoned Gyro. Topped with Lettuce, Tomato, Onion, Feta Cheese, and Tzagiki Sauce</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Sandwiches</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>B.L.T.</BottomTextItem>
                    <BottomTextDescription>Bacon, Lettuce and Tomato Sandwich served with Chips</BottomTextDescription>

                    <BottomTextItem>Triple Decker Club</BottomTextItem>
                    <BottomTextDescription>Bacon, Turkey, Cheese, Lettuce, Tomato, Mayonnaise Served with French Fries</BottomTextDescription>

                    <BottomTextItem>*Grilled Chicken Sandwich</BottomTextItem>
                    <BottomTextDescription>Grilled Chicken, Lettuce, Tomato, Mayonnaise Served with French Fries</BottomTextDescription>

                    <BottomTextItem>Reuben</BottomTextItem>
                    <BottomTextDescription>Corned Beef, Sauerkraut, Swiss Cheese on Rye served with French Fries</BottomTextDescription>

                    <BottomTextItem>Corned Beef or Pastrami Sandwich</BottomTextItem>
                    <BottomTextDescription>Choice of Pastrami or Corned Beef, Topped with Swiss Cheese on Rye served with French Fries</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Burgers</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>*Hamburger Platter</BottomTextItem>
                    <BottomTextDescription>1/2 lb Angus Beef Burger, Topped with Lettuce, Tomato and Mayonnaise served with French Fries</BottomTextDescription>
                    <BottomTextDescription>+Add on: Bacon</BottomTextDescription>

                    <BottomTextItem>*Cheeseburger Platter</BottomTextItem>
                    <BottomTextDescription>1/2 lb Angus Beef Burger, Topped with Lettuce, Tomato and Mayonnaise and Choice of Cheese(American, Provolone, Swiss, Crumbled Blue cheese, or Feta) served with French Fries</BottomTextDescription>
                    <BottomTextDescription>+Add on: Bacon</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Subs</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Turkey & Cheese</BottomTextItem>
                    <BottomTextDescription>Turkey, Provolone, Lettuce, Tomato and Mayonnaise served with French Fries</BottomTextDescription>

                    <BottomTextItem>Ham and Cheese</BottomTextItem>
                    <BottomTextDescription>Ham, Lettuce, Tomato, Provolone and Mayonnaise served with French Fries</BottomTextDescription>

                    <BottomTextItem>Chicken or Tuna Salad</BottomTextItem>
                    <BottomTextDescription>Provolone, Lettuce, Tomato and Mayonnaise served with French Fries</BottomTextDescription>

                    <BottomTextItem>Italian Cold Cut</BottomTextItem>
                    <BottomTextDescription>Ham, Salami, Mortadella, Provolone, Lettuce, Tomato, Onions and Vinaigrette served with French Fries</BottomTextDescription>

                    <BottomTextItem>*Steak and Cheese</BottomTextItem>
                    <BottomTextDescription>Provolone, Lettuce, Tomato, Grilled Onions and Mayonnaise served with French Fries</BottomTextDescription>

                    <BottomTextItem>*Hot Italian Subs</BottomTextItem>
                    <BottomTextDescription>Choice of Meatball, Italian Sausage, Veal Parmesan, or Chicken Parmesan served on a Toasted Sub Topped with Provolone and Marinara served with French Fries</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Pan Am Favorites</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Pan Am Stuffed Cabbage</BottomTextItem>
                    <BottomTextDescription>Ground Beef and Rice stuffed in Cabbage, Topped with Marinara served with the Vegetable of the day</BottomTextDescription>

                    <BottomTextItem>Moussaka</BottomTextItem>
                    <BottomTextDescription>Layered Ground Beef, Potato, Eggplant and Bechamel Sauce, served with the Vegetable of the Day</BottomTextDescription>

                    <BottomTextItem>Pasticio</BottomTextItem>
                    <BottomTextDescription>Ziti, Ground Beef, topped with Bechamel Sauce and Marinara, served with the Vegetable of the day</BottomTextDescription>

                    <BottomTextItem>*Chopped Sirloin Steak</BottomTextItem>
                    <BottomTextDescription>Ground Sirloin, TOpped with Grilled Onions and served with French Fries</BottomTextDescription>

                    <BottomTextItem>Chicken Kabob</BottomTextItem>
                    <BottomTextDescription>Pan Am's Variation of Chicken Kabob with Grilled Tomatoes, Onions, Green peppers with a side of Rice and Gravy</BottomTextDescription>

                    <BottomTextItem>*Fish and Chips</BottomTextItem>
                    <BottomTextDescription>Beer Battered Cod, served with French Fries and a side of tartar Sauce</BottomTextDescription>

                    <BottomTextItem>*Fried Shrimp</BottomTextItem>
                    <BottomTextDescription>Breaded in House SHrimp, served with French Fries and a Side of Cocktail Sauce</BottomTextDescription>

                    <BottomTextItem>*Fried Scallops</BottomTextItem>
                    <BottomTextDescription>Breaded in House Scallops, served with French Fries and a Side of Cocktail Sauce</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Pasta</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Spaghetti</BottomTextItem>
                    <BottomTextDescription>Topped with your Choice of our Homemade Marinara or Meat Sauce</BottomTextDescription>

                    <BottomTextItem>Spaghetti Meatballs or Italian Sausage</BottomTextItem>
                    <BottomTextDescription>Choice of Meatballs ot Italian Sausage Topped with our homemade Marinara</BottomTextDescription>

                    <BottomTextItem>Baked Ziti</BottomTextItem>
                    <BottomTextDescription>Ziti and Meat Sauce Topped with Mozzarella and Baked</BottomTextDescription>

                    <BottomTextItem>*Chicken Parmesan</BottomTextItem>
                    <BottomTextDescription>Served with Spaghetti Topped with Marinara</BottomTextDescription>

                    <BottomTextItem>*Veal Parmesan</BottomTextItem>
                    <BottomTextDescription>Served with Spaghetti Topped with Marinara</BottomTextDescription>

                    <BottomTextItem>Eggplant Parmesan</BottomTextItem>
                    <BottomTextDescription>Served with Spaghetti Topped with Marinara</BottomTextDescription>

                    <BottomTextItem>Lasagna</BottomTextItem>
                    <BottomTextDescription>Homemade Lasagna with Beef, Ricotta Cheese, Mozzarella Cheese and Parmesan Cheese</BottomTextDescription>

                    <BottomTextItem>Manicotti</BottomTextItem>
                    <BottomTextDescription>Pasta sleeves stuffed with Ricotta Cheese, topped with marinara and Mozzarella Cheese and Baked</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Homemade Pizza</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Small 12" | Medium 14" | Large 16"</BottomTextItem>
                    <BottomTextDescription>Cheese</BottomTextDescription>
                    <BottomTextDescription>One Topping</BottomTextDescription>
                    <BottomTextDescription>Two Toppings</BottomTextDescription>
                    <BottomTextDescription>Three Toppings</BottomTextDescription>
                    <BottomTextDescription>Four Toppings</BottomTextDescription>
                    <BottomTextDescription>Five Toppings or House Special</BottomTextDescription>

                    <BottomTextItem>Meat Toppings</BottomTextItem>
                    <BottomTextDescription>Peperoni, Sausage, Ground Beef, Bacon, Meatball, Ham, Salami, Gyro Meat, Anchovies</BottomTextDescription>

                    <BottomTextItem>Vegetable Toppings</BottomTextItem>
                    <BottomTextDescription>Green Pepper, Onions, Mushrooms, Tomatoes, Black Olives, Spinach, Pineapple, Jalapeno</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Children's Menu</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Grilled Cheese</BottomTextItem>
                    <BottomTextDescription>Grilled Cheese Sandwich served with French Fries</BottomTextDescription>

                    <BottomTextItem>Spaghetti with Meatball</BottomTextItem>
                    <BottomTextDescription>Spaghetti with Meatball Topped with Marinara</BottomTextDescription>

                    <BottomTextItem>Lasagna</BottomTextItem>

                    <BottomTextItem>*Fish and Chips</BottomTextItem>
                    
                    <BottomTextItem>*Chicken Nuggets</BottomTextItem>
                    <BottomTextDescription>Served with French Fries</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Sides</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>French Fries</BottomTextItem>

                    <BottomTextItem>Onion Rings</BottomTextItem>

                    <BottomTextItem>Rice</BottomTextItem>
                    <BottomTextDescription>Topped with Gravy</BottomTextDescription>

                    <BottomTextItem>Mashed Potatoes</BottomTextItem>
                    <BottomTextDescription>Topped with Gravy</BottomTextDescription>
                    
                    <BottomTextItem>Vegetable of the Day</BottomTextItem>
                    
                    <BottomTextItem>Coleslaw</BottomTextItem>

                    <BottomTextItem>Potato Salad</BottomTextItem>

                    <BottomTextItem>House Salad</BottomTextItem>
                    <BottomTextDescription>Lettuce, Tomato, Cucumber and your Choice of Dressing</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Desserts</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Rice Pudding</BottomTextItem>
                    <BottomTextDescription>Homemade Rice Pudding</BottomTextDescription>

                    <BottomTextItem>Pies</BottomTextItem>
                    <BottomTextDescription>Ask for available Pies</BottomTextDescription>

                    <BottomTextItem>Cakes</BottomTextItem>
                    <BottomTextDescription>Ask for available Cakes</BottomTextDescription>

                    <BottomTextItem>Cheesecake</BottomTextItem>
                    <BottomTextDescription>Homemade Cheesecake</BottomTextDescription>
                    
                    <BottomTextItem>Galaktoburiko</BottomTextItem>
                    <BottomTextDescription>Homemade Greek Custard</BottomTextDescription>

                    <BottomTextItem>Baklava</BottomTextItem>
                    <BottomTextDescription>Homemade Baklava</BottomTextDescription>

                </BoxBottom>
            </SectionBox>

            <SectionBox>
                <BoxTop>
                    <TopText>Beverages</TopText>
                </BoxTop>
                <BoxBottom>
                    
                    <BottomTextItem>Juice</BottomTextItem>
                    <BottomTextDescription>Small or Large Apple, Orange, Cranberry, Grapefruit, or Tomato</BottomTextDescription>
                    
                    <BottomTextItem>Milk</BottomTextItem>
                    <BottomTextDescription>Regular Whole Milk or Chocolate Milk</BottomTextDescription>

                    <BottomTextItem>Hot Beverages</BottomTextItem>
                    <BottomTextDescription>Regular / Decaffeinated Coffee or Hot Tea</BottomTextDescription>

                    <BottomTextDescription>Hot Chocolate</BottomTextDescription>
                    <BottomTextDescription>Topped with Whipped Cream</BottomTextDescription>

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