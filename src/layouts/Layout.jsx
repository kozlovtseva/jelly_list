import React, { useState } from "react";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { useMutation } from "urql";

import { setToken, removeToken, isAuthenticated } from "../utils/auth";

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
    const [isAuthed, setAuthed] = useState(isAuthenticated);
    const [name, setName] = useState("");

    const [result, executeQuery] = useMutation(logIn);

    const history = useHistory();

    const sendRequest = (userName, password) => {
        if (checkAuth(userName, password)) {
            const variables = { userName, password };
            executeQuery(variables).then((res) => {
                //обработка ответа
                console.log(result);
                authUser(userName);
            });
        } else {
            alert("Please, enter name and password");
        }
    };
    const checkAuth = (userName, password) => {
        return userName.length > 0 && password.length > 0 ? true : false;
    };
    const authUser = (userName) => {
        setName(userName);
        setToken("some_token");
        setAuthed(true);
        history.push("/");
    };
    const logOut = () => {
        removeToken();
        history.push("/login");
    };
    const app = isAuthed ? (
        <Route path="/">
            <Main logOut={logOut} name={name} />
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
