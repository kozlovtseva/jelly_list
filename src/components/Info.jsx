import React from "react";

import styled from "styled-components";

const Info = () => {
    return (
        <Content>
            <p>OK Google!</p>
        </Content>
    );
};

const Content = styled.div`
    color: #f14487;
    display: grid;
    font-size: 32px;
    font-weight: 400;
    height: 100vh;
    place-items: center;
`;

export default Info;
