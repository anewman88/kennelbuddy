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
                                    <Row className="DisplayDevices row" id={device.DeviceID + "Card"} key={device._id}>
                                        {/* col-3 show image of the pet */}
                                        <Col size="2" className="petImage">
                                            <img src={device.PetImage} alt={device.PetName} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the pet */}
                                        <Col size="9" className="petInfo">
                                            <Row>
                                                <Col size="10">
                                                    <a className="device" href={device.link} target="_blank" class="text-info">
                                                        <div className="device-title white-text">
                                                                <h3>{device.title}</h3>
                                                            </div>
                                                    </a>
                                                </Col>
                                                <Col size="2">
                                                    <button className="saveBook btn btn-info" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                                                        Save Book
                                                    </button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="4">
                                                    <h5 className="bookAuthor">Author: {book.author}</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{book.description}</p>
                                            </Row>
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
