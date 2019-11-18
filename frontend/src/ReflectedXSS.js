import React, { Component } from "react";
import queryString from 'query-string'
import './Vulnerability.css';
import Cookies from 'universal-cookie';

class ReflectedXSS extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    getQueryText() {
        const values = queryString.parse(this.props.location.search);
        return values.query;
    }

    componentDidMount() {
        const cookies = new Cookies();
        cookies.set('SESSION_ID', '3422ff71-ccf633', { path: '/' });
    }

    render() {
        let explanation = `
        Reflected XSS vulnerability (Cross-Site Scripting).
        Lets say there is search function, in which search words are transfered as URL parameters, and displayed alongside the search results.
        Malicious actor can construct url with his script as a parameter and send it to unsuspecting user.
        When user clicks on the link - script is getting executed.
        This script can steal cookies, perform unauthorized activities, do phishing to steal user credentials, inject a keylogger, steal sensitive information from the page, etc.
        Fix: input sanitization.
        `;
        return (
            <div className="App">
                <div className="explanation">
                    {explanation}
                </div>
                <div>
                    <span> Search terms: </span>
                    <span dangerouslySetInnerHTML={{__html: this.getQueryText()}} />
                    <div> Search results: none </div>
                </div>
                <button id="transfer-money" onClick={this.handleClick}>Transfer all the money!</button>
                <span> {this.state.isToggleOn ? 'MONEY SENT SUCCESSFULLY' : ''}</span>
                <div>
                    <span>User passport ID </span>
                    <span id="passport">837218203943282</span>
                </div>
                <div id="footer"></div>

            </div>
        );
    }
}

export default ReflectedXSS;
