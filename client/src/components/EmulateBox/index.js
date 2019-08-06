import React from "react";
import "./EmulateBox.css";
import {Row, Col} from "../Grid"

const EmulateBox = props => {
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
                    <h3>Emulate Device Info</h3>
                    <h4>{props.DeviceInfo.PetName} - {props.DeviceInfo.DeviceID}</h4>
                <div className="card-body">
                    <div className="device">

                            <div className="content">
                                <Row>
                                    <div className="curtemp">
                                        <h3>Current Temp: {props.DeviceInfo.Cur_Temp} &deg;F </h3> 
                                    </div>
                                </Row>
                                <Row>
                                    <h5>Low/High Temp Limits: {props.DeviceInfo.Lower_Temp}&deg;F / {props.DeviceInfo.Upper_Temp}&deg;F</h5> 
                                </Row>
                            </div>
                            <div className="buttons">
                                <button onClick={() => props.updateTemp(props.DeviceInfo.DeviceDBID)} className="emulate">Set Temp</button>
                                <button onClick={() => props.deactivateDevice(props.DeviceInfo.DeviceID)} className="deactivate">Deactivate</button>
                                <button onClick={() => props.removeDevice(props.DeviceInfo.DeviceID)} className="remove">Delete</button>
                            </div>
                    </div>

                    </div>
                </div>
        )
}
export default EmulateBox
