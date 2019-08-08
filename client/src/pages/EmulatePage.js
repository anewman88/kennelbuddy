import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
//import EmulateBox from "../components/EmulateBox";
//import "./css/style.css";

class EmulatePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            DeviceID: "",
            DeviceActive: false,
            DeviceEmulate: true,
            // CurAirTemp: 70,
            Cur_Temp: 70,
            DeviceInfo: {},
            Temps: []
        };
    }
    // get the device info based on the input parameter
    componentDidMount() {
        console.log ("in componentDidMount in Emulate with user id " + this.props.match.params.id)
        this.setState({DeviceID: this.props.match.params.id})

        API.updateEmulateDevice(this.props.match.params.id, this.state.DeviceEmulate)
        .then(res => {
            console.log ("after updateEmulateDevice got device data", res.data)
            this.setState({ DeviceInfo: res.data })
        })
        .catch(err => console.log(err));
    }
    
    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }
  
    readTemp = event => {
      event.preventDefault();

      // Emulate the device reading the current temperature
      // read the current air temp then send to the router. 
      
      alert ("in readTemp " + this.state.Cur_Temp + " for ID " + this.state.DeviceID);

      API.updateDeviceTemp(this.props.match.params.id, this.state.Cur_Temp)
      .then(res => {
          console.log ("after updateDeviceTemp got device data", res.data)
          this.setState({ DeviceInfo: res.data })
      })
      .catch(err => console.log(err));
    }

    render() {
      return (
          <Container fluid>
              <Nav HeadingText={"Kennel Buddy Emulating - " + this.state.DeviceID}></Nav>
              <Container className="emulatepage">
                <div className="card devicebox">
                    <h3>Emulate Device </h3>
                    <h4>{this.state.DeviceInfo.PetName} - {this.state.DeviceInfo.DeviceID}</h4>
                    <div className="card-body">
                        <div className="device">

                            <div className="content">
                            <Row>
                                    <div className="curtemp">
                                        <h3>Device Temp Reading: {this.state.DeviceInfo.Cur_Temp} &deg;F </h3> 
                                    </div>
                                </Row>
                                <Row>
                                    <h5>Low/High Temp Limits: {this.state.DeviceInfo.Lower_Temp}&deg;F / {this.state.DeviceInfo.Upper_Temp}&deg;F</h5> 
                                </Row>
                                <Row>
                                    <div className="curtemp">
                                        <h3>Current Air Temp: {this.state.Cur_Temp} &deg;F </h3> 
                                    </div>
                                </Row>
                                <form>
                                <Row>
                                    <Col size="3">
                                    </Col>
                                    <Col size="6">
                                        <div className="form-group">
                                            <input className="form-control"
                                                autoFocus
                                                value={this.state.Cur_Temp}
                                                type="text"
                                                name="Cur_Temp"
                                                placeholder="Set Temp*"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                </form>

                            </div>
                            <div className="buttons">
                                <button onClick={this.readTemp} className="readtemp">Read Temp</button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <EmulateBox className="emulatepage" 
                    DeviceInfo={this.state.DeviceInfo}
                    setAirTemp = {() => this.setAirTemp()} 
                    readTemp = {() => this.readTemp()} 
                /> */}
              </Container>
 

          </Container>
      )
  }
}

export default EmulatePage
