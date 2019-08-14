import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";

class AdminPage extends Component {
    state = {
        ActiveDevicesList: [],
        timerCnt: 0
    };

    forceScreenUpdate() {
        this.setState(prevState => ({
          timerCnt: prevState.timerCnt + 1
        }));
      }

    //when this component mounts, get a list of all the active Devices 
    // Setup screen refresh timer
    componentDidMount() {
        this.loadDevices();
        this.timerCnt = setInterval(() => this.forceScreenUpdate(), 20000);
    }

    componentWillUnmount() {
        clearInterval(this.forceScreenUpdate);
    }

    loadDevices = () => {
        API.findAllOnlineDevices()
            .then(res => this.setState({ ActiveDevicesList: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove Device by id
    deleteDevice = id => {
        alert ("Delete Device "+id+" not available for demo");
        return;
        API.removeDevice(id)
            .then(res => this.loadDevices())
            .catch(err => console.log(err))
    }

    //function to force a device offline
    deactivateDevice = id => {
        alert ("Deactivate Device "+id+" not available for demo");
        return;
        // API.???(id)
        //     .then(res => this.loadDevices())
        //     .catch(err => console.log(err))
    }

    //function to Show User Info
    showUserInfo = id => {
        alert ("Show User Info "+id+" not available for demo");
        return;
        API.findUserById(id)
            .then(res => this.loadDevices())
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <Container fluid className="container">
                <Nav HeadingText={"Administative Page - Active Devices"}></Nav>
                <Container>
                    {console.log ("ActiveDevices: ", this.state.ActiveDevicesList)}
                        <table class="table table-bordered">
                        <thead align="center">
                            <tr>
                            <th scope="col">Device ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Current Temp</th>
                            <th scope="col">Low/High Limits</th>
                            <th scope="col">Low/High Range</th>
                            <th scope="col">Deactivate</th>
                            <th scope="col">User Info</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody align="center" >
                            {this.state.ActiveDevicesList.length ? (
                                this.state.ActiveDevicesList.map(device => (

                            <tr key={device.DeviceID}> 
                            <td className="align-middle" ><h5>{device.DeviceID}</h5></td>
                            <td className="align-middle"><h5>{(device.DeviceOnline) ? ("Online") : ("Offline")}</h5></td>
                            <td className={((device.Cur_Temp < device.Lower_Temp) || (device.Cur_Temp > device.Upper_Temp)) ? 
                                    ("bg-danger align-middle") : ("bg-success align-middle")}><h5>  {device.Cur_Temp} &deg;F</h5></td>
                            <td className="align-middle"><h5>{device.Lower_Temp} / {device.Upper_Temp}&deg;F</h5></td>
                            <td className="align-middle"><h5>{device.TempMin} / {device.TempMax}&deg;F</h5></td>
                            <td ><button onClick={() => this.deactivateDevice(device.DeviceID)} className="deactivate">Take Offline</button></td>
                            <td ><button onClick={() => this.showUserInfo(device.UserDBID)} className="userinfo">Show</button></td>
                            <td ><button onClick={() => this.deleteDevice(device.DeviceID)} className="remove">X</button></td>
                            </tr>
                            ))
                            ) : (
                                <Row>
                                    <h3>No Results to Display</h3>
                                </Row>
                            )
                            }
                            </tbody>
                            </table>
                </Container>
            </Container>
        )
    }
}

export default AdminPage