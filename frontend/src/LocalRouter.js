import React, { Component } from "react";
import {
    Switch,
    BrowserRouter as Router,
    Route} from "react-router-dom";

import './LocalRouter.css';
import ReflectedXSS from "./vulnerability/ReflectedXSS";
import VulnerabilitiesList from "./VulnerabilitiesList";
import PersistentXSS from "./vulnerability/PersistentXSS";
import SqlInjection from "./vulnerability/SqlInjection";
import CSRF from "./vulnerability/CSRF";
import Clickjacking from "./vulnerability/Clickjacking";


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
                    <Route path="/sql-injection" component={SqlInjection}/>
                    <Route path="/csrf" component={CSRF}/>
                    <Route path="/clickjacking" component={Clickjacking}/>
                    <Route path="/" component={VulnerabilitiesList}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default LocalRouter;
