import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
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
  width: 80%;
`;

const StyledLinkSmall = styled(Link)`
  text-decoration: none;
  color: rgba(46, 49, 49, 1);
  border: 3px solid rgba(38, 106, 216, 1);
  margin: 2rem;
`;

const MenusPic = styled.div`
  background: url("https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
`;

const BreakfastMenu = styled.div`
  background: url("https://images.unsplash.com/photo-1475566718667-b6fe2e251c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
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
      <MenuContainer>
        <StyledLinkSmall to="/menus" title="Go back to the menus page.">
          <MenusPic alt="A paper menu over a white table cloth.">
            <Bar>Menus</Bar>
          </MenusPic>
        </StyledLinkSmall>
        <StyledLinkSmall
          to="/breakfast-menu"
          title="Check out the breakfast menu."
        >
          <BreakfastMenu alt="A coffee, pastry, and glass of water on the table.">
            <Bar>Breakfast Menu</Bar>
          </BreakfastMenu>
        </StyledLinkSmall>
      </MenuContainer>

      <SectionBox>
        <BoxTop>
          <TopText>appetizers</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>bruschetta</BottomTextItem>
          <BottomTextDescription>
            marinated tomatoes, chopped spinach, mushrooms, feta on toasted
            baguette
          </BottomTextDescription>

          <BottomTextItem>spanakopita</BottomTextItem>
          <BottomTextDescription>
            spinach and feta cheese pie
          </BottomTextDescription>

          <BottomTextItem>dolmades</BottomTextItem>
          <BottomTextDescription>
            grape leaves stuffed with rice
          </BottomTextDescription>

          <BottomTextItem>mozzarella sticks</BottomTextItem>
          <BottomTextDescription>
            homemade mozzarella sticks
          </BottomTextDescription>

          <BottomTextItem>soup of the day</BottomTextItem>
          <BottomTextDescription>
            chef's choice of soup of the day
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>salads</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>caesar salad</BottomTextItem>
          <BottomTextDescription>
            chopped romaine lettuce, croutons, parmesean cheese, ceasar dressing
          </BottomTextDescription>
          <BottomTextDescription>
            +add steak, salmon, or chicken
          </BottomTextDescription>

          <BottomTextItem>chef salad</BottomTextItem>
          <BottomTextDescription>
            ham, turkey, and provolone, over lettuce, tomato, cucumber, onions,
            and choice of dressing
          </BottomTextDescription>

          <BottomTextItem>grilled chicken salad</BottomTextItem>
          <BottomTextDescription>
            grilled chicken over lettuce, tomato, cucumber, olives, and hard
            boiled egg with vinaigrette
          </BottomTextDescription>

          <BottomTextItem>greek salad</BottomTextItem>
          <BottomTextDescription>
            lettuce, tomato, cucumber, onion, feta, olives, and creamy
            mediterranean dressing
          </BottomTextDescription>
          <BottomTextDescription>
            +add steak, salmon, or chicken
          </BottomTextDescription>

          <BottomTextItem>gyro salad</BottomTextItem>
          <BottomTextDescription>
            our gyro over a large greek salad
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>pan am favorites</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>primavera pasta</BottomTextItem>
          <BottomTextDescription>
            zucchini, yellow sqaush, carrots, red onion, spinach, with spaghetti
            with kourtaki wine and marinara sauce
          </BottomTextDescription>

          <BottomTextItem>pan am stuffed cabbage</BottomTextItem>
          <BottomTextDescription>
            ground beef and rice stuffed in cabbage, topped with marinara served
            with the vegetable of the day
          </BottomTextDescription>

          <BottomTextItem>moussaka</BottomTextItem>
          <BottomTextDescription>
            layered ground beef, potato, eggplant and bechamel sauce, served
            with the vegetable of the day
          </BottomTextDescription>

          <BottomTextItem>pastitcio</BottomTextItem>
          <BottomTextDescription>
            ziti, ground beef, topped with bechamel sauce and marinara, served
            with the vegetable of the day
          </BottomTextDescription>

          <BottomTextItem>*chopped sirloin steak</BottomTextItem>
          <BottomTextDescription>
            ground sirloin, topped with grilled onions and served with french
            fries
          </BottomTextDescription>

          <BottomTextItem>fish and chips</BottomTextItem>
          <BottomTextDescription>
            beer battered cod, served with french fries and a side of tartar
            sauce
          </BottomTextDescription>

          <BottomTextItem>*kabob</BottomTextItem>
          <BottomTextDescription>
            choice of beef or chicken, with peppers, onions, tomatoes, on top of
            white rice
          </BottomTextDescription>

          <BottomTextItem>fried shrimp</BottomTextItem>
          <BottomTextDescription>
            breaded in house shrimp, served with french fries and a side of
            cocktail sauce
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>gyro and souvlaki</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>*chicken, pork, or gyro bowl</BottomTextItem>
          <BottomTextDescription>
            choice of protein, served with romaine lettuce, marinated tomatoes,
            rice, feta, avocado, tzatiki, and pita
          </BottomTextDescription>

          <BottomTextItem>*chicken, pork, or gyro platter</BottomTextItem>
          <BottomTextDescription>
            choice of protein, served with a side greek salad, french fries, and
            pita
          </BottomTextDescription>

          <BottomTextItem>*chicken, pork, or gyro sandwich</BottomTextItem>
          <BottomTextDescription>
            choice of protein, topped with lettuce, tomato, feta cheese, and
            tzatiki sauce
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>subs</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>*steak and cheese</BottomTextItem>
          <BottomTextDescription>
            provolone, lettuce, tomato, grilled onions and mayonnaise served
            with chips
          </BottomTextDescription>

          <BottomTextItem>*hot italian subs</BottomTextItem>
          <BottomTextDescription>
            choice of meatball, italian sausage, veal parmesan, or chicken
            parmesan served on a toasted sub topped with provolone and marinara,
            served with chips
          </BottomTextDescription>

          <BottomTextItem>italian cold cut</BottomTextItem>
          <BottomTextDescription>
            ham, salami, mortadella, provolone, lettuce, tomato, onions and
            vinaigrette served with chips
          </BottomTextDescription>

          <BottomTextItem>ham and cheese</BottomTextItem>
          <BottomTextDescription>
            ham, lettuce, tomato, provolone, and mayonnaise, served with chips
          </BottomTextDescription>

          <BottomTextItem>turkey and cheese</BottomTextItem>
          <BottomTextDescription>
            turkey, provolone, lettuce, tomato and mayonnaise, served with chips
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>sandwiches and burgers</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>*hamburger platter</BottomTextItem>
          <BottomTextDescription>
            1/2 lb Angus Beef burger, topped with lettuce, tomato and
            mayonnaise, served with french fries
          </BottomTextDescription>

          <BottomTextItem>*cheeseburger platter</BottomTextItem>
          <BottomTextDescription>
            1/2 lb Angus Beef burger, topped with lettuce, tomato, and
            mayonnaise, with choice of cheese(American, provolone, Swiss,
            crumbled blue cheese, or feta) served with french fries
          </BottomTextDescription>

          <BottomTextItem>B.L.T.</BottomTextItem>
          <BottomTextDescription>
            bacon, lettuce, and tomato sandwich, served with chips
          </BottomTextDescription>

          <BottomTextItem>triple decker club</BottomTextItem>
          <BottomTextDescription>
            bacon, turkey, cheese, lettuce, tomato, and mayonnaise, served with
            french fries
          </BottomTextDescription>

          <BottomTextItem>*grilled chicken sandwich</BottomTextItem>
          <BottomTextDescription>
            grilled chicken, lettuce, tomato, mayonnaise, served with french
            fries
          </BottomTextDescription>

          <BottomTextItem>reuben</BottomTextItem>
          <BottomTextDescription>
            corned beef, sauerkraut, and Swiss cheese on rye, served with french
            fries
          </BottomTextDescription>

          <BottomTextItem>corned beef or pastrami sandwich</BottomTextItem>
          <BottomTextDescription>
            choice of corned beef and pastrami topped with Swiss cheese on rye,
            served with french fries
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>pasta</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>spaghetti</BottomTextItem>
          <BottomTextDescription>
            topped with your choice of our homemade marinara or meat sauce
          </BottomTextDescription>

          <BottomTextItem>
            spaghetti meatballs or italian sausage
          </BottomTextItem>
          <BottomTextDescription>
            choice of meatballs or italian sausage topped with our homemade
            marinara
          </BottomTextDescription>

          <BottomTextItem>baked ziti</BottomTextItem>
          <BottomTextDescription>
            ziti and meat sauce, topped with mozzarella and baked
          </BottomTextDescription>

          <BottomTextItem>*chicken parmesan</BottomTextItem>
          <BottomTextDescription>
            served with spaghetti, topped with marinara
          </BottomTextDescription>

          <BottomTextItem>*veal parmesan</BottomTextItem>
          <BottomTextDescription>
            served with spaghetti, topped with marinara
          </BottomTextDescription>

          <BottomTextItem>eggplant parmesan</BottomTextItem>
          <BottomTextDescription>
            served with spaghetti, topped with marinara
          </BottomTextDescription>

          <BottomTextItem>lasagna</BottomTextItem>
          <BottomTextDescription>
            homemade lasagna with beef, ricotta cheese, mozzarella cheese and
            parmesan cheese
          </BottomTextDescription>

          <BottomTextItem>manicotti</BottomTextItem>
          <BottomTextDescription>
            pasta sleeves stuffed with ricotta cheese, topped and baked with marinara and
            mozzarella cheese 
          </BottomTextDescription>

          <BottomTextItem>chicken piccata</BottomTextItem>
          <BottomTextDescription>
            sautéed chicken breast with lemon sauce, mushrooms, and capers, served over pasta
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>homemade pizza</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>small 12" | medium 14" | large 16"</BottomTextItem>
          <BottomTextDescription>cheese</BottomTextDescription>
          <BottomTextDescription>one topping</BottomTextDescription>
          <BottomTextDescription>two toppings</BottomTextDescription>
          <BottomTextDescription>three toppings</BottomTextDescription>
          <BottomTextDescription>four toppings</BottomTextDescription>
          <BottomTextDescription>
            five toppings or house special
          </BottomTextDescription>

          <BottomTextItem>meats:</BottomTextItem>
          <BottomTextDescription>
            pepperoni, sausage, ground beef, bacon, meatball, ham, salami, gyro
            meat, anchovies
          </BottomTextDescription>

          <BottomTextItem>vegetable:</BottomTextItem>
          <BottomTextDescription>
            green peppers, onions, mushrooms, tomatoes, black olives, spinach,
            pineapple, jalapeño
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>


      {/* <SectionBox>
        <BoxTop>
          <TopText>omelets</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>*Cheese Omelet</BottomTextItem>
          <BottomTextDescription>
            Choice of cheese: American, Provolone, Swiss, Feta, or Mozzarella,
            served with Home Fries and choice of Toast
          </BottomTextDescription>

          <BottomTextItem>*Mushroom and Cheese Omelet</BottomTextItem>
          <BottomTextDescription>
            Mushroom and American cheese, served with Home Fries and choice of
            Toast
          </BottomTextDescription>

          <BottomTextItem>*Ham and Cheese Omelet</BottomTextItem>
          <BottomTextDescription>
            Ham and American cheese, served with Home Fries and choice of Toast
          </BottomTextDescription>

          <BottomTextItem>*Western Omelet</BottomTextItem>
          <BottomTextDescription>
            Ham, green peppers, onions, and American cheese, served with Home
            Fries and choice of Toast
          </BottomTextDescription>

          <BottomTextItem>*Spinach and Feta Omelet</BottomTextItem>
          <BottomTextDescription>
            Spinach and feta cheese, served with Home Fries and choice of Toast
          </BottomTextDescription>

          <BottomTextItem>*The Pan Am Omelet</BottomTextItem>
          <BottomTextDescription>
            Tomato, onion, and feta cheese, served with Home Fries and choice of
            Toast
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox>

      <SectionBox>
        <BoxTop>
          <TopText>Children's Menu</TopText>
        </BoxTop>
        <BoxBottom>
          <BottomTextItem>Grilled Cheese</BottomTextItem>
          <BottomTextDescription>
            Grilled Cheese Sandwich served with French Fries
          </BottomTextDescription>

          <BottomTextItem>Spaghetti with Meatball</BottomTextItem>
          <BottomTextDescription>
            Spaghetti with Meatball Topped with Marinara
          </BottomTextDescription>

          <BottomTextItem>Lasagna</BottomTextItem>

          <BottomTextItem>*Fish and Chips</BottomTextItem>

          <BottomTextItem>*Chicken Nuggets</BottomTextItem>
          <BottomTextDescription>
            Served with French Fries
          </BottomTextDescription>
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
          <BottomTextDescription>
            Lettuce, Tomato, Cucumber and your Choice of Dressing
          </BottomTextDescription>
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
          <BottomTextDescription>
            Small or Large Apple, Orange, Cranberry, Grapefruit, or Tomato
          </BottomTextDescription>

          <BottomTextItem>Milk</BottomTextItem>
          <BottomTextDescription>
            Regular Whole Milk or Chocolate Milk
          </BottomTextDescription>

          <BottomTextItem>Hot Beverages</BottomTextItem>
          <BottomTextDescription>
            Regular / Decaffeinated Coffee or Hot Tea
          </BottomTextDescription>

          <BottomTextDescription>
            Hot Chocolate - Topped with Whipped Cream
          </BottomTextDescription>

          <BottomTextItem>Sodas</BottomTextItem>
          <BottomTextDescription>
            Coke, Diet Coke, Sprite, Ginger Ale, Pink Lemonade, Birch Beer,
            Unsweetened Iced Tea{" "}
          </BottomTextDescription>

          <BottomTextItem>Beer</BottomTextItem>
          <BottomTextDescription>Draft, Bottle, Pitcher</BottomTextDescription>
          <BottomTextDescription>Domestic or Import </BottomTextDescription>

          <BottomTextItem>Wine</BottomTextItem>
          <BottomTextDescription>Half or Full Carafe</BottomTextDescription>
          <BottomTextDescription>
            Chablis, Burgundy, Retsina, White Zinfandel, Chianti, Merlot,
            Chardonnay, Pinot Grigio
          </BottomTextDescription>
        </BoxBottom>
      </SectionBox> */}

      <BottomTextDescription>
        *Consuming raw or undercooked Meats, Poultry, Seafood, Shellfish, Eggs,
        or Caesar salad may increase your risk of food born illness. These items
        are cooked to customer preference.
      </BottomTextDescription>
    </Container>
  );
};

export default MainMenu;
