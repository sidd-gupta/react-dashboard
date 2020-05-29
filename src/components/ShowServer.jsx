import React, { Component } from "react";
import '../css/ShowServer.css';
import Loader from "./Loader.jsx";
class ShowServer extends Component {
  state = {
    isLoading: true,
    servers: {},
  };
  componentDidMount() {
    fetch(`${process.env.REACT_APP_DB_URL}`)
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoading: false,
            server: res
          });
        }
      )
  }
  render() {
    console.log(this.state.server);
    return (
      <React.Fragment>
        {
          this.state.isLoading ? <Loader /> : null
        }
        <div className="ShowServer">
          <h3><b>Server List</b></h3>
          <hr className="hr" />
        </div>
      </React.Fragment>
    );
  }
}

export default ShowServer;
