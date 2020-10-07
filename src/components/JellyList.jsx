import React from "react";

import styled from "styled-components";

import JellyListItem from "./JellyListItem";

const JellyList = (props) => {
    return (
        <List>
            {props.list.map((item, index) => (
                <JellyListItem key={index} item={item} />
            ))}
        </List>
    );
};

const List = styled.ul`
    height: 100vh;
`;

export default JellyList;
