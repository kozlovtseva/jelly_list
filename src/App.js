import React from "react";

import { createClient, Provider } from "urql";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./layouts/Layout";

const client = createClient({
    url: "https://github.com/kozlovtseva/jelly_list",
    fetchOptions: () => ({
        headers: {
            some_header: "tralala",
        },
    }),
});

function App() {
    return (
        <Provider value={client}>
            <Router>
                <Layout />
            </Router>
        </Provider>
    );
}

export default App;
