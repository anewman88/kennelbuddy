import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import "./css/style.css";

const DebugOn = true;

class HomePage extends Component {
    constructor(props) {

    super(props);

    this.state = {
      loggedIn: null,
      loading: false,
      error: null,
      initialTab: null,
      recoverPasswordSuccess: null,
      UserID: "",
      DeviceID: "",
      DeviceActive: false,
      CurTemp: 0,
      Temps: []
    };

  }

    render() {
      return (
      <div>
      <Nav HeadingText={"Welcome to Kennel Buddy"}></Nav>
      <Container fluid>
        <div>
            {/* <h1 className="text-center">Welcome to Kennel Buddy</h1> */}
            <h3 className="HomeHeading">Your best friend's electronic traveling companion</h3>
        </div>

        <Jumbotron />
        <Container>
          <Row>
            <Col size="4"></Col>
            <Col className="justify-content-center" size="2">
              <a className="nav-link" href="/userlogin"><button type="button" className="btn btn-info text-white">User Login</button></a>
            </Col>
            <Col className="justify-content-center" size="6"> 
              <a className="nav-link" href="/createuser"><button type="button" className="btn btn-danger text-white">Create Account</button></a>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3 className="HomeBody"> Click the User Login button to log into your account</h3>  
          <h3 className="HomeBody"> Click the Create Account button to create a new account</h3>  
        </Container>
      </Container>
      </div>
    )
  }
}




export default HomePage
