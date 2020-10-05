import React, { useState } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { useMutation } from "urql";

import Auth from "../pages/Auth";
import Main from "../pages/Main";

const logIn = `
  mutation ($userName: String!, $password: String!) {
    autorizationUser (input: {name: $userName, pass: $password}) {
      token
    }
  }
`;

const Layout = () => {
    const [isAuthed, setAuthed] = useState(false);
    const [name, setName] = useState("");
    const [result, executeQuery] = useMutation(logIn);
    const sendRequest = (userName, password) => {
        const variables = { userName, password };
        executeQuery(variables).then((res) => {
            //обработка ответа
            setName(userName);
            setAuthed(true);
            console.log(result);
        });
    };
    const app = isAuthed ? (
        <Route path="/">
            <Main name={name} />
        </Route>
    ) : (
        <Route path="/">
            <Redirect to="/login" />
        </Route>
    );
    return (
        <Switch>
            <Route path="/login">
                <Auth sendRequest={sendRequest} />
            </Route>
            {app}
        </Switch>
    );
};

export default Layout;
