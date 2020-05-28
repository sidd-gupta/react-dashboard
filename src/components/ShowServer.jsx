import React, { Component } from "react";
import '../css/ShowServer.css';
class ShowServer extends Component {
  render() {
    console.log(process.env.REACT_APP_DB_URL);
    return (
      <React.Fragment>
        <h3 className="tabHeader">Server List</h3>
        <hr className="hr" />
      </React.Fragment>
    );
  }
}

export default ShowServer;
