import React from "react";

import styled from "styled-components";

const JellyListItem = (props) => {
    return (
        <Container>
            <Image
                alt={props.item.name}
                src={require(`../images/${props.item.image}`)}
            />
            <Content>
                <Title>{props.item.name}</Title>
                <Text>{props.item.text}</Text>
            </Content>
        </Container>
    );
};

const Container = styled.li`
    color: #777;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
`;
const Image = styled.img`
    border-radius: 7px;
    height: 185px;
    margin-bottom: 30px;
    width: 300px;
`;
const Content = styled.div`
    flex: 1 1;
    margin: 0 30px;
    min-width: 300px;
`;
const Title = styled.h3`
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 20px;
`;
const Text = styled.p`
    font-size: 18px;
`;

export default JellyListItem;
