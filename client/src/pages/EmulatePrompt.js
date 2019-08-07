import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API.js";
import { Col, Row, Container } from "../components/Grid";
//import "./css/Login.css";

class EmulatePrompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DeviceID: "",
      UpdateInterval: 10,
      UserDBID: {},
      gotoEmulatePage: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log ("In EmulatePrompt before API.findEmulateDevice", this.state.DeviceID);
    
    // Find the device then proceed to the Emulate page
    API.findEmulateDevice(this.state.DeviceID)
    .then(res => {
      console.log("Device found ", res.data);

      this.setState({gotoEmulatePage: true});
    })
    .catch(err => console.log(err))
  }

  render() {
    if (this.state.gotoEmulatePage === true) {
      return <Redirect to={"/emulatedevice/" + this.state.DeviceID} />
    }

    return (
      <div className="LoginBox">
        <Container className="LoginBox">
        <h5 className="PromptHeader">Emulate Device</h5>
        <h5 className="PromptHeader">Input Device ID</h5>
        <h5 className="PromptHeader">(ie, KB1002)</h5>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col size="3">
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        autoFocus
                        value={this.state.DeviceID}
                        type="text"
                        name="DeviceID"
                        placeholder="Device ID*"
                        required
                        onChange={this.handleChange}
                    />
                </div>
              </Col>
          </Row>
          {/* <Row>
              <Col size="3">
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        autoFocus
                        value={this.state.UpdateInterval}
                        type="number"
                        name="UpdateInterval"
                        label="Update Interval"
                        placeholder="in seconds*"
                        required
                        onChange={this.handleChange}
                    />
                </div>
              </Col>
          </Row> */}
          <button type="submit"> Submit </button>
        </form>
        </Container>
      </div>
    );
  }
}

export default EmulatePrompt