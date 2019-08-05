import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
//import UserInfo from "../components/UserInfo";
import Nav from "../components/Nav";
import UserBox from "../components/UserBox";
import DeviceBox from "../components/DeviceBox";
import "./css/style.css";

const DebugOn = true;

class UserPage extends Component {
  //create state
  state = {
      UserID: "",
      DeviceDBID: "",
      DeviceActive: false,
      DeviceEmulate: false,
      UserInfo: [],
      DeviceInfo: [],
      CurTemp: 0,
      Temps: []
  };
  // get the user info based on the input parameter see example below
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log ("in UserPage with user id " + this.props.match.params.id)
    const UserDBID = this.props.match.params.id;
    this.setState ({UserID: UserDBID})

    API.findUserById(UserDBID)
      .then(res => {
        console.log ("got user data", res.data)
        this.setState({ UserInfo: res.data })
        
        // Get the user's device information
        this.setState ({DeviceDBID: res.data.DeviceDBID})

        console.log ("in UserPage looking for device " + this.state.DeviceDBID)
        API.findDeviceById(this.state.DeviceDBID)
        .then(res => {
          console.log ("got device", res.data)
          this.setState({ DeviceInfo: res.data })
        })
        .catch(err => console.log(err));
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
  
    removeDevice = event => {
      //Delete the device from the database
      alert ("Delete Device not available for demo");
    };

    emulateDevice = event => {
      console.log ("in UserPage emulateDevice clicked " + this.state.DeviceDBID)
      
      // toggle the state emulate flag
      this.setState({ DeviceEmulate: !this.state.DeviceEmulate })

      // update the database
    //   API.updateDevice(this.state.DeviceDBID, this.state.DeviceEmulate)
    //   .then(res => {
    //     console.log ("got device", res.data)
    //     this.setState({ DeviceInfo: res.data })
    //   })
    //   .catch(err => console.log(err));

    };

    deactivateDevice = event => {
      console.log ("in UserPage deactivateDevice clicked " + this.state.DeviceDBID)
      
      // set DeviceActive flage to false
      this.setState({ DeviceActive: false});

      // update the database
    //   API.updateDevice(this.state.DeviceDBID, this.state.DeviceEmulate)
    //   .then(res => {
    //     console.log ("got device", res.data)
    //     this.setState({ DeviceInfo: res.data })
    //   })
    //   .catch(err => console.log(err));

    };

    render() {
      return (
          <Container fluid>
              <Nav HeadingText={"Kennel Buddy"}></Nav>
              <Container className="userpage">
              <UserBox className="userpage" UserInfo={this.state.UserInfo} />
              <DeviceBox className="userpage" DeviceInfo={this.state.DeviceInfo}
                  removeDevice = {() => this.removeDevice()}
                  emulateDevice = {() => this.emulateDevice()} 
                  deactivateDevice = {() => this.deactivateDevice()} 
              />
              </Container>
 

          </Container>
      )
  }
}

export default UserPage
