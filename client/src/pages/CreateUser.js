import React, { Component } from "react";
//import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import UserForm from "../components/UserForm";
import { Col, Row, Container } from "../components/Grid";

const DebugOn = true;

class CreateUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Name: '*',
        Address1: '*',
        Address2: '',
        City: '*',
        State: '*',
        Zip: '*',
        Phone1: '*',
        Phone2: '',
        EC_Name: '*',
        EC_Phone: '*',
        Comment: '',
        PetName: '*',
        PetImage:'*',
        DeviceID: '*',
        DeviceOnline: false,
        Upper_Temp: 80,
        Lower_Temp: 65,
        Interval: 10  // in seconds
      };
    }

    SubmitHandler = (event) => {
      event.preventDefault();
      console.log ("in SumbmitHandler");
      console.log ('this.state ', this.state);

      // Verify that the required fields are filled
      // Check that they do not equal "*"  ????
      
      // write the user information to the database
      const userInfo = {};
      console.log('userInfo Before', userInfo);
      console.log ("size of state is " + this.state.length);
      for (const field in this.state) {
        console.log ("in for, assigning ", field);
        userInfo[field] = this.state[field];
      }
      console.log('-->', userInfo);
      // API.createUser(userInfo)
      //     .then(this.setState({ message: alert("Your user info is saved") }))
      //     .catch(err => console.log(err))
    }

    ChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    render() {
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