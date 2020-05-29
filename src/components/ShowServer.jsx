import React, { Component } from "react";
import '../css/ShowServer.css';
class ShowServer extends Component {
  render() {
    console.log(process.env.REACT_APP_DB_URL);
    return (
      <React.Fragment>
        <div className="ShowServer">
          <h3><b>Server List</b></h3>
          <hr className="hr" />
        </div>
      </React.Fragment>
    );
  }
}

export default ShowServer;
