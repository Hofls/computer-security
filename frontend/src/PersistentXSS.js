import React, { Component } from "react";
import './Vulnerability.css';


class PersistentXSS extends Component {
    constructor(props) {
        super(props);
        this.state = { textAreaValue: "<img onerror='alert(\"Hacked! (for example of an evil script look at Reflected XSS) \")' src='invalid-image' />", apiResponse: ""};

        this.setMessage = this.setMessage.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setMessage() {
        fetch('http://localhost:8080/profile/1', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: this.state.textAreaValue
        })
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);

    }

    getMessage() {
        fetch("http://localhost:8080/profile/1")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    handleChange(event) {
        this.setState({textAreaValue: event.target.value});
    }


    componentDidMount() {
        this.getMessage();
    }

    render() {
        let explanation = `
        Persistent XSS vulnerability (Cross-Site Scripting).
        Lets say there is user profile page, in which you can set profile message that will be displayed to all visitors of the page.
        Malicious actor can set his script as a profile message.
        When any user opens this profile - evil script will be executed.
        This script can steal cookies, perform unauthorized activities, do phishing to steal user credentials, inject a keylogger, steal sensitive information from the page, etc.
        You can find example of an evil script at Reflected XSS page.
        Fix: input sanitization.
        `;
        return (
            <div className="App">
                <div className="explanation">
                    {explanation}
                </div>
                <span> Profile message: </span>
                <span dangerouslySetInnerHTML={{__html: this.state.apiResponse}} />
                <div/>
                <textarea value={this.state.textAreaValue} onChange={this.handleChange} style={{width: 500 + 'px'}}></textarea>
                <div>
                    <button id="transfer-money" onClick={this.setMessage}>Set profile message</button>
                </div>
            </div>
        );
    }
}

export default PersistentXSS;
