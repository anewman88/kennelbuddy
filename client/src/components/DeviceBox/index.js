import React from "react";
import "./DeviceBox.css";
import {Row} from "../Grid"

const DeviceBox = props => {
    return (props.DeviceInfo.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="device">
                    <h3>No Device Available</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card devicebox">
                    <h3>Kennel Buddy Device Info</h3>
                    <h4>{props.DeviceInfo.PetName} - {props.DeviceInfo.DeviceID}</h4>
                <div className="card-body">
                    <div className="device">

                            {/* <Row>
                                <div className="img-container">
                                    <img alt={props.name} src={props.DeviceInfo.PetImage} />
                                </div>
                            </Row> */}

                            <div className="content">
                                <Row>
                                    <div className="devstatus">
                                        <h3>Device Status: {props.DeviceStatus}</h3> 
                                    </div>
                                </Row>

                                <Row>
                                    <div className="curtemp">
                                        <h3>Current Temp: {props.DeviceInfo.Cur_Temp} &deg;F </h3> 
                                    </div>
                                </Row>
                                <Row>
                                    <h5>Lowest Temp: {props.DeviceInfo.TempMin} &deg;F with Limit: {props.DeviceInfo.Lower_Temp}&deg;F</h5> 
                                </Row>
                                <Row>
                                    <h5>Highest Temp: {props.DeviceInfo.TempMax} &deg;F with Limit: {props.DeviceInfo.Upper_Temp}&deg;F</h5> 
                                </Row>
                            </div>
                            <div className="buttons">
                                <button onClick={() => props.deactivateDevice(props.DeviceInfo.DeviceID)} className="deactivate">Deactivate</button>
                                <button onClick={() => props.emulateDevice(props.DeviceInfo.DeviceID)} className="emulate">Emulate</button>
                                <button onClick={() => props.removeDevice(props.DeviceInfo.DeviceID)} className="remove">Delete</button>
                            </div>
                    </div>

                    </div>
                </div>
        )
}
export default DeviceBox
