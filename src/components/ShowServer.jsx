import React, { Component } from "react";
import '../css/ShowServer.css';
import Loader from "./Loader.jsx";
import CardsGrid from "./CardsGrid.jsx";
import { Card, Col, CardBody, Row } from 'reactstrap';
class ShowServer extends Component {
  state = {
    isLoading: true,
    servers: [],
  };
  componentDidMount() {
    fetch(`${process.env.REACT_APP_DB_URL}`)
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoading: false,
            servers: res
          });
        }
      )
  }
  render() {
    return (
      <React.Fragment>
        {
          this.state.isLoading ? <Loader /> : null
        }
        <div className="ShowServer">
          <h3><b>Server List</b></h3>
          <hr className="hr" />

          <CardsGrid>
            {
              this.state.servers !== undefined ?
                this.state.servers.map((ele, index) => {
                  return (
                    <React.Fragment>
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
