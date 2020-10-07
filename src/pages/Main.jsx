import React from "react";

import styled from "styled-components";
import { media } from "../Media";

import JellyList from "../components/JellyList";

const Main = (props) => {
    const list = [
        {
            name: "Spirals",
            text:
                'The word comes from the French marmelade, meaning mainly citrus jam, in French it came from port. marmelada, where this word was called exclusively quince marmalade. In Portuguese, the word marmelo "quince" came from Latin, where it got from Greek, where melimelon meant "honey Apple", from meli "honey" and melon "Apple". ',
            image: "jelly1.jpg",
        },
        {
            name: "Bears",
            text:
                'The word comes from the French marmelade, meaning mainly citrus jam, in French it came from port. marmelada, where this word was called exclusively quince marmalade. In Portuguese, the word marmelo "quince" came from Latin, where it got from Greek, where melimelon meant "honey Apple", from meli "honey" and melon "Apple". ',
            image: "jelly2.jpg",
        },
        {
            name: "Warms",
            text:
                'The word comes from the French marmelade, meaning mainly citrus jam, in French it came from port. marmelada, where this word was called exclusively quince marmalade. In Portuguese, the word marmelo "quince" came from Latin, where it got from Greek, where melimelon meant "honey Apple", from meli "honey" and melon "Apple". ',
            image: "jelly3.jpg",
        },
        {
            name: "Stars",
            text:
                'The word comes from the French marmelade, meaning mainly citrus jam, in French it came from port. marmelada, where this word was called exclusively quince marmalade. In Portuguese, the word marmelo "quince" came from Latin, where it got from Greek, where melimelon meant "honey Apple", from meli "honey" and melon "Apple". ',
            image: "jelly4.jpg",
        },
        {
            name: "Mix",
            text:
                'The word comes from the French marmelade, meaning mainly citrus jam, in French it came from port. marmelada, where this word was called exclusively quince marmalade. In Portuguese, the word marmelo "quince" came from Latin, where it got from Greek, where melimelon meant "honey Apple", from meli "honey" and melon "Apple". ',
            image: "jelly5.jpg",
        },
    ];
    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={() => props.logOut()}>log out</Button>
            </ButtonWrapper>
            <Container>
                <Title>The Sweetest List For You</Title>
                <JellyList list={list} />
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 1440px;
    padding: 40px;
    ${media.sm} {
        padding: 20px;
    }
    ${media.xs} {
        padding: 10px;
    }
`;
const Container = styled.div`
    display: grid;
    place-items: center;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Button = styled.button`
    background-color: #f14487;
    border-radius: 7px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    cursor: pointer;
    height: 30px;
    transition: box-shadow 0.2s ease, background-color 0.2s ease;
    width: 80px;
    &:hover {
        background-color: #cb3a72;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    }
    &:active {
        background-color: #a1335e;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
    }
    &:focus {
        outline: 0;
    }
`;
const Title = styled.h1`
    color: #f14487;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 30px;
`;

export default Main;
