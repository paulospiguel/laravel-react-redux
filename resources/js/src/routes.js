import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/", state: { from: props.location } }}
                />
            )
        }
    />
);

import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

import Dashboard from "./pages/Dashboard";

/* import NewProject from "./components/NewProject.js.old";
import ProjectsList from "./components/ProjectsList";
import SingleProject from "./components/SingleProject"; */

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* <Route path="/:id" component={SingleProject} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
