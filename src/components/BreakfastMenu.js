import React from "react";

import styled from "styled-components";

const SectionBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
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
`;



const BreakfastMenu = () => {
    return (
        <div>
            <h1>Breakfast menu here</h1>
        </div>
    )
}

export default BreakfastMenu;