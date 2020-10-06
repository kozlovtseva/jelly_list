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
        <Container>
            <form onSubmit={handleSubmit}>
                <Input placeholder="name" onChange={handleSetName} />
                <Input placeholder="password" onChange={handleSetPassword} />
                <Button type="submit">GO!</Button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    height: fit-content;
    width: fit-content;
`;
const Input = styled.input``;

const Button = styled.button``;

export default Auth;
