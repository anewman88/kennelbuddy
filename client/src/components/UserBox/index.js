import React from "react";
import "./UserBox.css";
import {Container, Row, Col} from "../Grid"

const UserBox = props => {
    return (props.UserInfo.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="user">
                    <h3>No User Info Available</h3>
                </div>
            </div>
        </div>
    ) : (
                    <Container className="userbox">
                        <div className="content">
                            <Row>
                                <Col size="3"></Col>
                                <Col size="3">
                                    <a>Name: {props.UserInfo.Name}</a> 
                                </Col>
                                <Col size="3">
                                    <a>Username: {props.UserInfo.username}</a> 
                                </Col>
                            </Row>
                            <Row>
                                
                            </Row>
                        </div>

                    </Container>
        )
}
export default UserBox
