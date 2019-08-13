import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import UserForm from "../components/UserForm";
import { Col, Row, Container } from "../components/Grid";
import "./css/Login.css";

const DebugOn = true;

class CreateUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        password2: '',
        UserCreated: false,
        Name: '',
        Address1: '',
        Address2: '',
        City: '',
        State: '',
        Zip: '',
        Phone1: '',
        Phone2: '',
        EC_Name: '',
        EC_Phone1: '',
        EC_Phone2: '',
        Comment: '',
        PetName: '',
        PetImage:'',
        DeviceID: '',
        UserDBID: '',
        DeviceDBID: '',
        DeviceOnline: false,
        Upper_Temp: 80,
        Lower_Temp: 65,
        Cur_Temp: 0,
        Interval: 10,  // in seconds
        gotoUserPage: false
      };
    }

    handleCreateSubmit = (event) => {
      event.preventDefault();

      // check that password and password2 are the same
      if ((this.state.password === this.state.password2) && (this.state.username)) {
        // create a new user in the database
        const userCreateInfo = {};
        userCreateInfo.username = this.state.username;
        userCreateInfo.password = this.state.password;
        
        if (DebugOn) console.log('In CreateUser before API.createUser: ', userCreateInfo);
        API.createUser(userCreateInfo)
          .then(res => {
            if (DebugOn) console.log("User created return data is ", res.data);
            this.setState ({UserDBID: res.data._id})
          })
          .catch(err => console.log(err))

        this.setState({UserCreated: true})
      }
      else { // login credentials not correct
        this.setState({
          userinfo: '', 
          password: '', 
          password2:''
        });
      }
    }

    SubmitHandler = (event) => {
      event.preventDefault();
      // Create a new user only if the authorization key matches

      if (this.state.Comment === this.state.DeviceID) {

        // write the user information to the database
        const userInfo = {};
        for (const field in this.state) {
          if (DebugOn) console.log ("in for, assigning ", field);
          userInfo[field] = this.state[field];
        }
        if (DebugOn) console.log('Input UserInfo: ', userInfo);
        API.updateUser(this.state.UserDBID, userInfo)
          .then(res => {
            if (DebugOn) console.log("User info saved return data is ", res.data);
            this.setState ({UserDBID: res.data._id})

            // Create the device in the database
            const deviceInfo = {};
            deviceInfo.DeviceID = userInfo.DeviceID;
            deviceInfo.DeviceOnline = false;
            deviceInfo.UserDBID = this.state.UserDBID;
            deviceInfo.PetName = userInfo.PetName;
            // correct the pet image path
            deviceInfo.PetImage = userInfo.PetImage.replace("C:\\fakepath", "..\\images");
            deviceInfo.Upper_Temp = userInfo.Upper_Temp;
            deviceInfo.Lower_Temp = userInfo.Lower_Temp;
            deviceInfo.TempMax = 0;
            deviceInfo.TempMin = 500;
            deviceInfo.Interval = userInfo.Interval;
            deviceInfo.Cur_Temp = 0;
            API.createDevice(deviceInfo)
            .then(res => {
              if (DebugOn) console.log("Device info saved return data is ", res.data);
              let DeviceID = res.data._id;
              this.setState ({DeviceDBID: DeviceID})
              userInfo.DeviceDBID = res.data._id;

              // Update the user record with the device ID
              API.updateUser(this.state.UserDBID, userInfo)
              .then(res => {
                if (DebugOn) console.log("DeviceDBID saved in User info - return data is ", res.data);
              })
              .catch(err => console.log(err))     

            })
            .catch(err => console.log(err))
          })
          .catch(err => console.log(err))

          // go to UserPage
          this.setState({gotoUserPage: true});
      } // if (this.state.Comment === this.state.DeviceID)
    }

    ChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    render() {
      if (this.state.gotoUserPage === true) {
        return (<Redirect to={"/userpage/" + this.state.UserDBID} />
        )
      }
      
      // Prompt for user info to create new user
      if (!this.state.UserCreated) {
        return (
          <div className="LoginBox">
            <Container className="LoginBox">
              <h4 className="LoginHeader">Create User</h4>
              <form onSubmit={this.handleCreateSubmit}>
                <Row>
                    <Col size="3">
                    </Col>
                    <Col size="6">
                      <div className="form-group">
                          <input className="form-control"
                              autoFocus
                              value={this.state.username}
                              type="text"
                              name="username"
                              placeholder="Username*"
                              required
                              onChange={this.ChangeHandler}
                          />
                      </div>
                    </Col>
                </Row>

                <Row>
                    <Col size="3">
                    </Col>
                    <Col size="6">
                      <div className="form-group">
                          <input className="form-control"
                              autoFocus
                              value={this.state.password}
                              type="password"
                              name="password"
                              placeholder="Password*"
                              required
                              onChange={this.ChangeHandler}
                          />
                      </div>
                    </Col>
                </Row>

                <Row>
                    <Col size="3">
                    </Col>
                    <Col size="6">
                      <div className="form-group">
                          <input className="form-control"
                              autoFocus
                              value={this.state.password2}
                              type="password"
                              name="password2"
                              placeholder="Password*"
                              required
                              onChange={this.ChangeHandler}
                          />
                      </div>
                    </Col>
                </Row>
                <button type="submit">Login</button>
              </form>
            </Container>
          </div>
        )
      }
      
      return (
        <Container fluid>
            <Jumbotron>
            <h1 className="text-white">Create User Page</h1>
            <h3 className="text-white">Fields marked with an * are required</h3>
            </Jumbotron>
            <Container>
                <UserForm
                    ChangeHandler={this.ChangeHandler}
                    SubmitHandler={this.SubmitHandler}
                />
            </Container>
        </Container>
      );
    }
  }

  export default CreateUser