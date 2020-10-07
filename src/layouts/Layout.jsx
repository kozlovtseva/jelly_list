import React, { useState } from "react";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { useMutation } from "urql";

import { setToken, removeToken, isAuthenticated } from "../utils/auth";

import Auth from "../pages/Auth";
import Main from "../pages/Main";
import Info from "../components/Info";

const logIn = `
  mutation ($userName: String!, $password: String!) {
    autorizationUser (input: {name: $userName, pass: $password}) {
      token
    }
  }
`;

const Layout = () => {
    const [isAuthed, setAuthed] = useState(isAuthenticated);

    const [result, executeQuery] = useMutation(logIn);

    const history = useHistory();

    const sendRequest = (userName, password) => {
        if (checkAuth(userName, password)) {
            const variables = { userName, password };
            executeQuery(variables).then((res) => {
                //обработка ответа
                console.log(result);
                authUser();
            });
        } else {
            alert("Please, enter name and password");
        }
    };
    const checkAuth = (userName, password) => {
        return userName.length > 0 && password.length > 0 ? true : false;
    };
    const authUser = () => {
        setToken("some_token");
        setAuthed(true);
        history.push("/");
    };
    const logOut = () => {
        removeToken();
        history.push("/login");
    };
    const app = isAuthed ? (
        <Switch>
            <Route path="/:id" component={Info} />
            <Route path="/">
                <Main logOut={logOut} />
            </Route>
        </Switch>
    ) : (
        <Route exact path="/">
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
