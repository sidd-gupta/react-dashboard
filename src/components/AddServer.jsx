import React, { Component } from "react";
import '../css/AddServer.css';
class AddServer extends Component {
    render() {
        console.log(process.env.REACT_APP_DB_URL);
        return (
            <React.Fragment>
                <div className="AddServer">
                    <h3><b>Add Server</b></h3>
                    <hr className="hr" />
                </div>
            </React.Fragment>
        );
    }
}

export default AddServer;