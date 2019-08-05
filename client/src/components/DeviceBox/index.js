import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

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
            <div className="card">
                <div className="card-body">
                    <div className="device">
                        <h3>Kennel Buddy Device</h3>

                            <Row>
                            <div className="img-container">
                                <img alt={props.name} src={props.DeviceInfo.PetImage} />
                            </div>
                            </Row>
                            <div className="content">
                                <Row>
                                    <strong>Pet Name:</strong> {props.DeviceInfo.PetName}
                                </Row>
                                <Row>
                                    <strong>Current Temp:</strong> {props.DeviceInfo.Cur_Temp}
                                </Row>
                                <Row>
                                    <strong>Upper Temp:</strong> {props.DeviceInfo.Upper_Temp}
                                </Row>
                                <Row>
                                    <strong>Lower Temp:</strong> {props.DeviceInfo.Lower_Temp}
                                </Row>
                            </div>
                            <span onClick={() => props.removeDevice(props.DeviceInfo.DeviceID)} className="remove">
                            𝘅
                            </span>
                    </div>

                    </div>
                </div>
        )
}
export default DeviceBox
