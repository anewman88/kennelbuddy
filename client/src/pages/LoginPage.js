import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API.js";
import { Col, Row, Container } from "../components/Grid";
import "./css/Login.css";

const DebugOn = true;

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      UserDBID: {},
      gotoUserPage: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    // Verify that the user has an account then proceed to the user page
    const userLoginInfo = {};
    userLoginInfo.username = this.state.username;
    userLoginInfo.password = this.state.password;
    
    if (DebugOn) console.log ("In LoginPage before API.findUser ", userLoginInfo);
    API.findUser(userLoginInfo)
//    API.findUser(query)
    .then(res => {
      if (DebugOn) console.log("User found id ", res.data);
      let UserDBID = res.data._id;

      // go to UserPage
      this.setState({gotoUserPage: true, UserDBID: res.data._id});
    })
    .catch(err => console.log(err))

    // Clear the form fields
    this.setState({username: '', password: ''});

  }

  render() {
    if (this.state.gotoUserPage === true) {
      return <Redirect to={"/userpage/" + this.state.UserDBID} />
    }

    return (
      <div className="LoginBox">
        <Container className="LoginBox">
        <h4 className="LoginHeader">User Login</h4>
        <form onSubmit={this.handleSubmit}>
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </div>
              </Col>
          </Row>
          <button type="submit">Login</button>
        </form>
        </Container>
      </div>
    );
  }
}

export default UserLogin