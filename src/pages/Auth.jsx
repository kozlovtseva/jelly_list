import React, { useState } from "react";
import styled from "styled-components";

const Auth = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSetName = (e) => {
        setName(e.currentTarget.value);
    };
    const handleSetPassword = (e) => {
        setPassword(e.currentTarget.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendRequest(name, password);
    };
    return (
        <Wrapper>
            <Container>
                <Title>Log in to see The Sweetest List Ever</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="name" onChange={handleSetName} />
                    <Input
                        placeholder="password"
                        onChange={handleSetPassword}
                    />
                    <Button type="submit">GO!</Button>
                </Form>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    height: 100vh;
    place-items: center;
`;
const Container = styled.div``;
const Title = styled.h2`
    color: #f14487;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 30px;
`;
const Form = styled.form``;
const Input = styled.input`
    border: 1px solid #f14487;
    box-shadow: 0px 4px 4px rgba(241, 68, 135, 0.4),
        0px 4px 4px rgba(241, 68, 135, 0.4), 0px 4px 4px rgba(241, 68, 135, 0.4),
        0px 4px 4px rgba(241, 68, 135, 0.4);
    border-radius: 7px;
    display: block;
    height: 30px;
    margin-bottom: 30px;
    padding-left: 10px;
    width: 300px;
    &:focus {
        outline: 0;
    }
`;

const Button = styled.button`
    background-color: #f14487;
    border-radius: 7px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    cursor: pointer;
    height: 30px;
    outline: none:
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
    &:focus {outline:0;}
`;

export default Auth;
