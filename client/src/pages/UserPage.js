import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
//import UserInfo from "../components/UserInfo";
//import AddDevice from "../components/AddDevice";
//import DisplayDevice from "../components/DisplayDevices";

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
  componentDidMount() {
    console.log ("in UserPage for user id " + this.props.match.params.id)
    this.setState ({UserID: this.props.match.params.id})

    API.findUser(this.props.match.params.id)
      .then(res => {
        console.log ("got user data", res.data)

        // Get the user's device information
        this.setState ({DeviceID: res.data.DeviceDBID})
        API.findDevice(this.state.DeviceID)
        .then(res => {
          console.log ("got user device", res.data)
  
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
  

    render() {
      return (
          <Container fluid>
              <Jumbotron>
                <h1 className="text-white">User Page</h1>
              </Jumbotron>
              <div className="LoginBox">
              <Container className="LoginBox">
              <h4 className="LoginHeader">input user id</h4>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col size="3">
                    </Col>
                    <Col size="6">
                      <div className="form-group">
                          <input className="form-control"
                              autofocus
                              value={this.state.UserID}
                              type="text"
                              name="UserID"
                              placeholder="UserID"
                              required
                              onChange={this.handleChange}
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
                  Submit
                </button>
              </form>
              </Container>
            </div>
          </Container>
      )
  }
}

export default UserPage
