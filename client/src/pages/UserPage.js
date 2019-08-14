import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import DeviceBox from "../components/DeviceBox";
import "./css/style.css";

// const io = require('socket.io-client');
// var socket = io();
// var socketDeviceID = '';

const DebugOn = true;

class UserPage extends Component {
  //create state
  state = {
      UserID: "",
      DeviceDBID: "",
      UserInfo: [],
      DeviceInfo: [],
      CurTemp: 0,
      forceRefresh: 0,
      Temps: [],
      timerCnt: 0
  };

  forceScreenUpdate() {
    this.setState(prevState => ({timerCnt: prevState.timerCnt + 1}));
    console.log ("In forceScreenUpdate");
    API.findDeviceById(this.state.DeviceDBID)
    .then(res => {
      if (DebugOn) console.log ("got device", res.data)
      this.setState({ DeviceInfo: res.data })
    })
  }

  // get the user info based on the input parameter 
  componentDidMount() {
    if (DebugOn) console.log ("in UserPage with user id " + this.props.match.params.id)

    const UserDBID = this.props.match.params.id;
    this.setState ({UserID: UserDBID});

    API.findUserById(UserDBID)
      .then(res => {
        if (DebugOn) console.log ("got user data", res.data)
        this.setState({ UserInfo: res.data })
        
        // Get the user's device information
        this.setState ({DeviceDBID: res.data.DeviceDBID})

        if (DebugOn) console.log ("in UserPage looking for device " + this.state.DeviceDBID)
        API.findDeviceById(this.state.DeviceDBID)
        .then(res => {
          if (DebugOn) console.log ("got device", res.data)
          this.setState({ DeviceInfo: res.data })

          // Set the screen refresh time to the device interval time
          const screenRefreshInterval = (res.data.Interval * 1000);
          if (DebugOn) console.log ("Screen Refresh Interval is "+ screenRefreshInterval);
          this.timerCnt = setInterval(() => this.forceScreenUpdate(), screenRefreshInterval);
       
          // Connect the socket for this DeviceID
        //   var DeviceID = this.state.DeviceInfo.DeviceID;
        //   console.log ("before connect socket for device ", DeviceID);
        //   socket.on('connect', function() {
        //     // Connected, sign-up for to receive messages for this device
        //     console.log ("Connecting socket for device ", DeviceID);
        //     socket.emit('device', DeviceID);
        //   });

        //   socket.on(DeviceID, function(msg){
        //     console.log ("Received a message from the server "+msg);
        //     this.setState ({forceRefresh: 12});
        //     });
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }
    
    componentWillUnmount() {
      clearInterval(this.forceScreenUpdate);
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      if (DebugOn) console.log ("In UserPage Getting User Data for id " + this.props.match.params.id);
      this.setState ({UserID: this.props.match.params.id})

      API.findUser(this.props.match.params.id)
      .then(res => {
        if (DebugOn) console.log("User found id ", res.data);
        let UserDBID = res.data._id;
      })
      .catch(err => console.log(err))
    }
  
    refreshDevice = event => {
      if (DebugOn) console.log ("in UserPage.refreshDevice click " + this.state.DeviceDBID)
      API.findDeviceById(this.state.DeviceDBID)
      .then(res => {
        if (DebugOn) console.log ("got device", res.data)
        this.setState({ DeviceInfo: res.data })
      })
    }

    removeDevice = event => {
      //Delete the device from the database
      alert ("Delete Device "+ this.state.DeviceInfo.DeviceID +" not available for demo");
    };

    deactivateDevice = event => {
      alert ("Deactivate Device "+ this.state.DeviceInfo.DeviceID +" not available for demo");
    };

    render() {
      return (
          <Container fluid>
              <Nav HeadingText={"Kennel Buddy - " + this.state.UserInfo.username}></Nav>
              <Container className="userpage">
              {/* <UserBox className="userpage" UserInfo={this.state.UserInfo} /> */}
              <DeviceBox className="userpage" 
                  DeviceInfo={this.state.DeviceInfo}
                  refreshDevice = {() => this.refreshDevice()}
                  removeDevice = {() => this.removeDevice()}
                  deactivateDevice = {() => this.deactivateDevice()} 
              />
              </Container>
          </Container>
      )
  }
}

export default UserPage
