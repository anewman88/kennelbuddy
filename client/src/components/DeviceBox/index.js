import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const DeviceBox = props => {
    return (props.DeviceInfo.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="device">
                    <h3>No Device</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div className="device">
                        <h3>User Device</h3>
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
export default DeviceBox
