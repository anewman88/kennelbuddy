import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../utils/API.js";
import { Col, Row, Container } from "../components/Grid";
import "./Login.css";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
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

    // Clear the form fields
    this.setState({["username"]: '', ["password"]: ''});

    alert("login submitted");

    // Verify that the user has an account then proceed
    // to the user page
    const userLoginInfo = {};
    userLoginInfo.username = this.state.username;
    userLoginInfo.password = this.state.password;
    
    console.log ("In LoginPage before API.findUser ", userLoginInfo);
    const query = "{" + "username:" + this.state.username + ", password:" + this.state.password + "}";
    API.findUser(userLoginInfo)
    // API.findUser(query)
    .then(res => {
      console.log("User found id ", res.data);
      let UserDBID = res.data._id;
      console.log("User id is " + UserDBID);

      // go to UserPage
      this.setState({gotoUserPage: true});
    })
    .catch(err => console.log(err))

    // go to UserPage
    this.setState({gotoUserPage: true});
  }

  render() {
    if (this.state.gotoUserPage === true) {
      return <Redirect to='/userpage' />
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
                        autofocus
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
                        autofocus
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
    );
  }
}

export default UserLogin