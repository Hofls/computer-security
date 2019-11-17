import React, { Component } from "react";
import {
    Switch,
    BrowserRouter as Router,
    Route} from "react-router-dom";

import './LocalRouter.css';
import ReflectedXSS from "./ReflectedXSS";
import VulnerabilitiesList from "./VulnerabilitiesList";
import PersistentXSS from "./PersistentXSS";


class LocalRouter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <div>
                <Switch>
                    <Route path="/reflected-xss" component={ReflectedXSS}/>
                    <Route path="/persistent-xss" component={PersistentXSS}/>
                    <Route path="/" component={VulnerabilitiesList}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default LocalRouter;
