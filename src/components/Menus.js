import React from "react";
import { Route, Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const BreakfastMenu = styled.div`
    background: url('https://images.unsplash.com/photo-1475566718667-b6fe2e251c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
`;

const Bar = styled.h2`
    background-color: rgba(38, 106, 216, 1);
    font-size: 2rem;
    margin-left: 0.3rem;
    color: rgba(236, 236, 236, 1);
`;

const Menus = () => {
    return (
        <Container>
            <BreakfastMenu>
                <Bar>Breakfast</Bar>
                <h2>Test</h2>
            </BreakfastMenu>
            <Route exact path="/main-menu">

            </Route>

            <Route exact path="/breakfast-menu">

            </Route>
        </Container>
    )
}

export default Menus;