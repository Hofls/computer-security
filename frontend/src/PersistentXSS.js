import React, { Component } from "react";


class PersistentXSS extends Component {
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
        return (
            <div className="App">
                <div dangerouslySetInnerHTML={{__html: this.state.apiResponse}} />
                <p className="App-intro"> {this.state.apiResponse}</p>
            </div>
        );
    }
}

export default PersistentXSS;
