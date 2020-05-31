import React, { Component } from "react";
import '../css/AddServer.css';
import Loader from "./Loader.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, CardFooter } from 'reactstrap';

class AddServer extends Component {
    state = {
        isLoading: false,
        id: "",
        name: "",
        language: "",
        framework: ""
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitServerDetails() {
        if (this.state.id && this.state.name && this.state.language && this.state.framework) {
            const payload =
            {
                "name": this.state.name,
                "id": this.state.id,
                "language": this.state.language,
                "framework": this.state.framework
            };


            fetch(`${process.env.REACT_APP_DB_URL}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),

            })
        }
        else {
            toast.error("Enter all the * marked details")
        }
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
                {
                    this.state.isLoading ? <Loader /> : null
                }
                <div className="AddServer">
                    <h3><b>Add Server</b></h3>
                    <hr className="hr" />
                    <div className="serverForm">
                        <div className="animated fadeIn">
                            <Row>
                                <Col xs="12" sm="7">
                                    <Card>
                                        <CardHeader>
                                            <strong>Add Server</strong>
                                        </CardHeader>
                                        <CardBody>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Label htmlFor="id">Server Id<span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Label htmlFor="name">Server Name<span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Label htmlFor="language">Server Language<span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="text" name="language" value={this.state.language} onChange={this.onChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Label htmlFor="framework">Server Framwork<span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="text" name="framework" value={this.state.framework} onChange={this.onChange} />
                                                </FormGroup>
                                            </Col>
                                        </CardBody>
                                        <CardFooter style={{ backgroundColor: "white" }}>
                                            <Button type="submit" className="submitButton" onClick={() => this.submitServerDetails()}>Save Server Details</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default AddServer;