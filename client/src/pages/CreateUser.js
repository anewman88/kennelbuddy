import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import UserForm from "../components/UserForm";
import { Col, Row, Container } from "../components/Grid";

const DebugOn = true;

class CreateUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
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
        DeviceOnline: false,
        Upper_Temp: 80,
        Lower_Temp: 65,
        Interval: 10,  // in seconds
        gotoUserPage: false
      };
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
      API.createUser(userInfo)
        .then(res => {
          console.log("User info saved return data is ", res.data);
          let UserDBID = res.data._id;
          console.log("User id is " + UserDBID);

          // Create the device in the database
          const deviceInfo = {};
          deviceInfo.DeviceID = userInfo.DeviceID;
          deviceInfo.DeviceOnline = false;
          deviceInfo.UserDBID = UserDBID;
          deviceInfo.PetName = userInfo.PetName;
          deviceInfo.PetImage = userInfo.PetImage;
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
        return <Redirect to='/userpage' />
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