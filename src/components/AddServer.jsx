import React, { Component } from "react";
class AddServer extends Component {
    render() {
        console.log(process.env.REACT_APP_DB_URL);
        return (
            <h1>AddServer</h1>
        );
    }
}

export default AddServer;