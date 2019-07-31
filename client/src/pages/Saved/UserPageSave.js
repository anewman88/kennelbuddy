import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import UserInfo from "../components/UserInfo";
import AddDevice from "../components/AddDevice";
import DisplayDevice from "../components/DisplayDevices";

const DebugOn = true;

class UserPage extends Component {
  //create state
  state = {
      UserID: "",
      DeviceID: "",
      DeviceActive: false,
      CurTemp: 0,
      Temps: []
  };

  // get the user info based on the input parameter see example below
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

  render() {
      return (
          <Container fluid>
              <Jumbotron>
                <h1 className="text-white">User Page</h1>
              </Jumbotron>
              <Container>
                  {/* <DisplayUserInfo />
                  <DisplayDevices ActiveDeviceList={this.state.ActiveDeviceList} handleDeleteButton={this.handleDeleteButton} /> */}
              </Container>
          </Container>
      )
  }
}

export default UserPage
