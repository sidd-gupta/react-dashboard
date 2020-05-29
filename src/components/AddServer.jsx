import React, { Component } from "react";
import '../css/AddServer.css';
import Loader from "./Loader.jsx";
class AddServer extends Component {
    state = {
        isLoading: false,
    };
    render() {
        return (
            <React.Fragment>
                {
                    this.state.isLoading ? <Loader /> : null
                }
                <div className="AddServer">
                    <h3><b>Add Server</b></h3>
                    <hr className="hr" />
                </div>
            </React.Fragment>
        );
    }
}

export default AddServer;