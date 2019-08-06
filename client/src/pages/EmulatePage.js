import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import EmulateBox from "../components/EmulateBox";
import "./css/style.css";

const DebugOn = true;
const OFFLINE = 0;
const ONLINE = 1;
const OFFLINE_EM = 2;
const ONLINE_EM = 3;

const Status = [ 
  {str: "Offline", color: 0}, 
  {str: "Online", color: 0},
  {str: "Offline Em", color: 0},
  {str: "Online Em", color: 0}
];

class EmulatePage extends Component {
  //create state
  state = {
      DeviceID: "",
      DeviceDBID: "",
      DeviceActive: false,
      DeviceEmulate: false,
      DeviceInfo: [],
      CurAirTemp: 0,
      Cur_Temp: 0,
      Temps: []
  };

  // get the device info based on the input parameter
  componentDidMount() {
    console.log ("in Emulate with user id " + this.props.match.params.id)
    this.setState ({DeviceID: this.props.match.params.id})

    API.findDeviceAndEmulate(this.state.DeviceID)
      .then(res => {
        console.log ("got device data", res.data)
        this.setState({ DeviceInfo: res.data })
      })
      .catch(err => console.log(err));
  }
    
  handleChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }
  
    handleSubmit = event => {
      event.preventDefault();
  
      console.log ("In UserPage Getting User Data for id " + this.props.match.params.id);
      this.setState ({UserID: this.props.match.params.id})

      API.findUser(this.props.match.params.id)
      .then(res => {
        console.log("User found id ", res.data);
        let UserDBID = res.data._id;
        console.log("User id is " + UserDBID);
  
      })
      .catch(err => console.log(err))
  
    }
  
    readTemp = event => {
      
      // Emulate the device reading the current temperature
      // read the current air temp then send to the router.  
      alert ("Delete Device not available for demo");
    };

    
    
    render() {
      return (
          <Container fluid>
              <Nav HeadingText={"Kennel Buddy Emulating - " + this.state.DeviceID}></Nav>
              <Container className="emulatepage">
              <EmulateBox className="emulatepage" 
                  DeviceInfo={this.state.DeviceInfo}
                  DeviceStatus={Status[this.state.DeviceStatus].str}
                  setAirTemp = {() => this.setAirTemp()} 
                  readTemp = {() => this.readTemp()} 
              />
              </Container>
 

          </Container>
      )
  }
}

export default EmulatePage
