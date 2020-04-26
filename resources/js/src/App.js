import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import "./styles/global";
import "antd/dist/antd.css";

import Routes from "./routes";

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
