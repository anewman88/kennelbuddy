import React, { Component } from "react";
import API from "../utils/API";
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
      // Verify that the required fields are filled
      // Check that they do not equal "*"  ????

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
            <h1 className="text-white">Input User Data</h1>
            <h3 className="text-white">Fields marked with an * are required</h3>
            </Jumbotron>
            <Container>
                <UserForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </Container>
            {/* <br></br>
            <Container>
                <SearchResult books={this.state.books} handleSaveButton={this.handleSaveButton} />
            </Container> */}
        </Container>

      );
    }
  }

  export default CreateUser