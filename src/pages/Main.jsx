import React from "react";

const Main = (props) => {
    return (
        <div>
            <button onClick={() => props.logOut()}>log out</button>
        </div>
    );
};

export default Main;
