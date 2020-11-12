import React from "react";
import Menus from "./Menus.js";
import styled from "styled-components";

// SEO
import SEO from "../SEO";

const Box = styled.div`
  margin-top: "2rem";
`;

const HomePage = () => {
  return (
    <>
      <SEO
        title="PanAm Family Restaurant - Family Style Greek Cuisine"
        description="Enjoy our cuisine in a family style restaurant."
        profileURL={"https://www.panamfamrest.com/"}
      />
      <Box>
        {/* <SimpleModal /> */}
        <Menus />
      </Box>
    </>
  );
};

export default HomePage;
