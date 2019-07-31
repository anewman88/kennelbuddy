import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const DisplayDevices = props => {
    return (props.devices.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="device">
                    <h3>Active Devices</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div className="device">
                        <h3>Active Devices</h3>
                        {props.devices.map(device => {
                            return (
                                <li className="search-list list-group-item">


                                {/* use googlebooks as an example here */}
                                    <Row>
                                        <Col size="6" className="DisplayDevices col" id={device.DeviceID + "Card"} key={device._id}>
                                            
                                        </Col>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default DisplayDevices
