import React from "react";
import "./DeviceBox.css";
import {Row} from "../Grid"

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

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
                                        <h3>Device Status: {(props.DeviceInfo.DeviceOnline) ? ("Online") : ("Offline")}</h3> 
                                    </div>
                                </Row>
                                <Row>
                                    {/* <div className="curtemp" style={props.TempColor}> */}
                                    <div className="curtemp" style={
                                        ((props.DeviceInfo.Cur_Temp < props.DeviceInfo.Lower_Temp) || 
                                        (props.DeviceInfo.Cur_Temp > props.DeviceInfo.Upper_Temp)) ? 
                                        ({backgroundColor: bgColors.Red}) : ({backgroundColor: bgColors.Green})}>
                                        <h3 >Current Temp: {props.DeviceInfo.Cur_Temp} &deg;F </h3> 
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
                                <button onClick={() => props.refreshDevice(props.DeviceInfo.DeviceID)} className="refresh">Refresh</button>
                                <button onClick={() => props.deactivateDevice(props.DeviceInfo.DeviceID)} className="deactivate">Deactivate</button>
                                <button onClick={() => props.removeDevice(props.DeviceInfo.DeviceID)} className="remove">Delete</button>
                            </div>
                    </div>

                    </div>
                </div>
        )
}
export default DeviceBox
