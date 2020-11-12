import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// SEO
import SEO from "../SEO";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
`;

const StyledLinkSmall = styled(Link)`
  text-decoration: none;
  color: rgba(46, 49, 49, 1);
  border: 3px solid rgba(38, 106, 216, 1);
  margin: 2rem;
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

const MainMenu = styled.div`
  background: url("https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
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

const Menus = () => {
  return (
    <>
      <SEO
        title="PanAm Family Restaurant - Breakfast and Main Menus"
        description="Take a look through our menus and find your favorites. Make sure to try our desserts!"
        profileURL={"https://www.panamfamrest.com/menus"}
      />
      <Container>
        <StyledLinkSmall
          to="/breakfast-menu"
          title="Check out the breakfast menu."
        >
          <BreakfastMenu alt="A coffee, pastry, and glass of water on the table.">
            <Bar>Breakfast Menu</Bar>
          </BreakfastMenu>
        </StyledLinkSmall>
        <StyledLinkSmall to="/main-menu" title="Check out the main menu.">
          <MainMenu alt="A sliced pizza on a plate.">
            <Bar>Main Menu</Bar>
          </MainMenu>
        </StyledLinkSmall>
      </Container>
    </>
  );
};

export default Menus;
