import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import UserForm from "../components/UserForm";
import { Col, Row, Container } from "../components/Grid";
import "./css/Login.css";
//import { set } from "mongoose";

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
        EC_Phone: '',
        Comment: '',
        PetName: '',
        PetImage:'',
        DeviceID: '',
        UserDBID: '',
        DeviceDBID: '',
        DeviceOnline: false,
        Upper_Temp: 80,
        Lower_Temp: 65,
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
        
        console.log('-->', userCreateInfo);
        API.createUser(userCreateInfo)
          .then(res => {
            console.log("User created return data is ", res.data);
            this.setState ({UserDBID: res.data._id})
            console.log("User id is " + this.state.UserDBID);
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

      // write the user information to the database
      const userInfo = {};
      for (const field in this.state) {
        console.log ("in for, assigning ", field);
        userInfo[field] = this.state[field];
      }
      console.log('-->', userInfo);
      API.updateUser(this.state.UserDBID, userInfo)
        .then(res => {
          console.log("User info saved return data is ", res.data);
          this.setState ({UserDBID: res.data._id})
          console.log("User id is " + this.state.UserDBID);

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
          deviceInfo.Interval = userInfo.Interval;
          deviceInfo.Cur_Temp = 0;
          console.log ("about to call createDevice with ", deviceInfo);
          API.createDevice(deviceInfo)
          .then(res => {
            console.log("Device info saved return data is ", res.data);
            let DeviceID = res.data._id;
            console.log("Device id is " + DeviceID);
            console.log ("Device res.data._id is", res.data._id)
            this.setState ({DeviceDBID: DeviceID})
            console.log("Device dbid is " + this.state.DeviceDBID);        
            userInfo.DeviceDBID = res.data._id;

            // Update the user record with the device ID
            API.updateUser(this.state.UserDBID, userInfo)
            .then(res => {
              console.log("DeviceDBID saved in User info - return data is ", res.data);
            })
            .catch(err => console.log(err))     

          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

        // go to UserPage
        this.setState({gotoUserPage: true});
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
                              autofocus
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
                              autofocus
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
                              autofocus
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


                <button
                  block
                  bsSize="large"
                  // disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </button>
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