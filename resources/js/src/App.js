import React from "react";
import ReactDOM from "react-dom";

import "./styles/global";

import Routes from "./routes";

function App() {
    return <Routes />;
}

ReactDOM.render(<App />, document.getElementById("app"));
