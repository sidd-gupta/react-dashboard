import React, { Component } from "react";
import '../css/ShowServer.css';
import Loader from "./Loader.jsx";
import CardsGrid from "./CardsGrid.jsx";
import { Button, Card, Col, CardBody, Row, Input } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ShowServer extends Component {
  state = {
    isLoading: true,
    servers: [],
    selectedServerId: "",
  };

  componentDidMount() {
    this.fetchServers();
  }

  fetchServers() {
    fetch(`${process.env.REACT_APP_DB_URL}` + `/` + this.state.selectedServerId)
      .then(res => res.json())
      .then(
        (res) => {
          if (this.state.selectedServerId) {
            this.setState({
              isLoading: false,
              servers: [res]
            });
            toast.success("Server Id successfully fetched")
          }
          else {
            this.setState({
              isLoading: false,
              servers: res
            });
            toast.success("Servers successfully fetched")
          }
        }
      )
      .catch((error) => { toast.error("Server Id could not be fetched" + error); });
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
        {
          this.state.isLoading ? <Loader /> : null
        }
        <div className="ShowServer">
          <h3><b>Server List</b></h3>
          <hr className="hr" />
          <Input type="text" placeholder="Select Server Id" className="searchBar" name="selectedServerId" value={this.state.selectedServerId} onChange={this.onChange} />
          <SearchIcon className="searchIcon" />
          <Button className="searchButton" onClick={() => this.fetchServers(this.state.selectedServerId)}>Search</Button>
          <CardsGrid>
            {
              this.state.servers !== undefined ?
                this.state.servers.map((ele, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Card key={index}>
                        <div className={"cardHeader"}>
                          <h4>
                            #<b>{ele.id}</b>
                          </h4>
                        </div>
                        <hr style={{ margin: '10px' }} />
                        <CardBody>
                          <Col>
                            <Row>
                              <p><b>Name:</b> {ele.name}</p>
                            </Row>
                            <Row>
                              <p><b>Language:</b> {ele.language}</p>
                            </Row>
                            <Row>
                              <p><b>Framework:</b> {ele.framework}</p>
                            </Row>
                          </Col>
                        </CardBody>
                        <button className="cardButton">
                          {
                            'Delete'
                          }
                        </button>
                      </Card>
                    </React.Fragment>
                  );
                })
                :
                null
            }
          </CardsGrid>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowServer;
