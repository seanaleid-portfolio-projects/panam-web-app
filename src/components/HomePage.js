import React from "react";

import styled from "styled-components";

const Background = styled.div`
  background-color: pink;
`;

const Text = styled.h1`
  color: rgba(46, 49, 49, 1);
`;

const HomePage = () => {
    return (
        <div>
            <Background>
                <Text>This is a test</Text>
                <Text>Hello from the home page!</Text>
            </Background>
        </div>
    )
}

export default HomePage;