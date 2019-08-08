import React, { Component } from "react";
import API from "../utils/API";
import {Container } from "../components/Grid";

class UpdateDeviceTemp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            DeviceID: this.props.match.params.DeviceID,
            Cur_Temp: this.props.match.params.Cur_Temp,
            DeviceOnline: true,
            DeviceInfo: {},
        };
    }
    
    componentDidMount() {
       this.UpdateDevTemp();
    }
    
    UpdateDevTemp = () => {
        console.log ("in  UpdateDevTemp() with DeviceID " + this.props.match.params.DeviceID)
        console.log ("in  UpdateDevTemp() with Cur_Temp " + this.props.match.params.Cur_Temp)

        API.updateDeviceTemp(this.props.match.params.DeviceID, this.props.match.params.Cur_Temp)
        .then(res => {
            console.log ("after updateDeviceTemp got device data", res.data)
            this.setState({ DeviceInfo: res.data })
        })
        .catch(err => console.log(err));
    }

    render() {
      return (
          <Container fluid>
              <Container>
                <div>
                    <h3>UpdateDeviceTemp </h3>
                    <h4>{this.state.DeviceID} - {this.state.Cur_Temp}</h4>
                </div>
              </Container>
           </Container>
      )
  }
}

export default UpdateDeviceTemp
