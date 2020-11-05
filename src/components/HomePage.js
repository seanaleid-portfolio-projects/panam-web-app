import React from "react";

import Menus from "./Menus.js";
// import SimpleModal from "./modal.js";

import styled from "styled-components";

const Box = styled.div`
  margin-top: "2rem";
`;

const HomePage = () => {
  return (
    <Box>
      {/* <SimpleModal /> */}
      <Menus />
    </Box>
  );
};

export default HomePage;
