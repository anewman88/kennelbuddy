import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

const DebugOn = true;

class HomePage extends Component {
  //create state
  state = {
      UserID: "",
      DeviceID: "",
      DeviceActive: false,
      CurTemp: 0,
      Temps: []
  };

  render() {
      return (
          <Container fluid>
              <div>
                  <h1 className="text-center">Welcome to Kennel Buddy</h1>
                  <h3 className="text-center">Your best friend's digital traveling companion</h3>
              </div>

              <Jumbotron />
              
              <nav className="navbar navbar-default sticky-top justify-content-center bg-light">
                <a className="nav-link" href="/userlogin"><button type="button" className="btn btn-info text-white">User Login</button></a>
                <a className="nav-link" href="/createuser"><button type="button" className="btn btn-danger text-white">Create Account</button></a>
                <a className="nav-link" href="/adminlogin"><button type="button" className="btn btn-danger text-white">Admin Login</button></a>
                <a className="nav-link" href="/adminlogin"><button type="button" className="btn btn-danger text-white">Admin Login</button></a>
              </nav>
              <Container>
                  <Row>
                  <p> Click the User Login button to log into your account</p>  
                  <p> Click the Create Account button to create a new account</p>  
                  </Row>
              </Container>
          </Container>
      )
  }
}

export default HomePage
