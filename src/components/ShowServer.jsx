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
    dataString: "",
  };

  componentDidMount() {
    this.fetchServers();
  }

  fetchServers() {
    this.setState({ isLoading: true });
    var fetchUrl;
    if (this.state.selectedServerId)
      fetchUrl = `${process.env.REACT_APP_DB_URL}/${this.state.selectedServerId}`;
    else
      fetchUrl = `${process.env.REACT_APP_DB_URL}`;
    fetch(fetchUrl)
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
      .catch((error) => {
        this.setState({
          isLoading: false,
          servers: undefined
        });
        if (this.state.selectedServerId) {
          this.setState({ dataString: "Server Id Does Not Exists" });
          toast.error("Server Id Not Found");
        } else {
          this.setState({ dataString: "Server Data Not Found" });
          toast.error("Server Data Not Found");
        }
      });
  }

  async deleteServer(id) {
    await fetch(`${process.env.REACT_APP_DB_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response)
      .then(data => {
        this.setState({ isLoading: false });
        if (data.status === 200)
          toast.success("Successfully deleted Server")
      })
    await this.setState({ isLoading: false });
    await this.fetchServers();
  }


  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  async resetServers() {
    await this.setState({
      servers: [],
      selectedServerId: "",
      dataString: "",
    });
    await this.fetchServers();
  }

  updateServerDetails(arrayObj) {
    this.props.onClick(!this.props.selected, arrayObj);
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
        {
          this.state.isLoading ? <Loader /> : null
        }
        <section>
          <div className="ShowServer"><h3><b>Server List</b></h3></div>
          <hr className="hr" />
          <Row>
            <Input type="text" placeholder="Select Server Id" className="searchBar" name="selectedServerId" value={this.state.selectedServerId} onChange={this.onChange} />
            <SearchIcon className="searchIcon" />
            <Button className="searchButton" onClick={() => this.fetchServers()}>Search</Button>
            <Button className="resetButton" onClick={() => this.resetServers()}>Reset</Button>
          </Row>
          <div className="ShowServer">
            <CardsGrid>
              {
                this.state.servers !== undefined ?
                  this.state.servers.map((ele, index) => {

                    var arrayObj = [{
                      "id": ele.id,
                      "name": ele.name,
                      "language": ele.language,
                      "framework": ele.framework
                    }];

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
                          <button className="cardButton" onClick={() => this.updateServerDetails(arrayObj)}>
                            {
                              'Update'
                            }
                          </button>
                          <button className="cardButton" onClick={() => this.deleteServer(ele.id)}>
                            {
                              'Delete'
                            }
                          </button>
                        </Card>
                      </React.Fragment>
                    );
                  })
                  :
                  <h3 className="noServer"><b>{this.state.dataString}</b></h3>
              }
            </CardsGrid>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ShowServer;
