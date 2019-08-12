import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";

class AdminPage extends Component {
    state = {
        ActiveDevicesList: []
    };

    //when this component mounts, get a list of all the active Devices 

    // componentDidMount() {
    //     this.loadDevices();
    // }

    // loadDevices = () => {
    //     API.getDevices()
    //         .then(res => this.setState({ ActiveDevicesList: res.data }))
    //         .catch(err => console.log(err))
    // }

    //function to remove Device by id
    handleDeleteButton = id => {
        API.deleteDevice(id)
            .then(res => this.loadDevices())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Nav HeadingText={"Administative Page"}></Nav>
                <Jumbotron> </Jumbotron>
                <Container>
                  <p>Put device info here</p>
                  {/* <DisplayDevices ActiveDeviceList={this.state.ActiveDeviceList} handleDeleteButton={this.handleDeleteButton} /> */}
                </Container>
            </Container>
        )
    }
}

export default AdminPage