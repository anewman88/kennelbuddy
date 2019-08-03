import React from "react";
import {Row, Col} from "../Grid"
//import "./style.css";

const UserForm = props => {
  return (
      <form>
          <Row>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Name}
                        type="text"
                        name="Name"
                        placeholder="Full Name *"
                        required
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.PetName}
                        type="text"
                        name="PetName"
                        placeholder="Pet's Name *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Address1}
                        type="text"
                        name="Address1"
                        placeholder="Street Address *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.PetImage}
                        type="file"
                        name="PetImage"
                        placeholder="Pet's Image *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Address2}
                        type="text"
                        name="Address2"
                        placeholder="Street Address (optional)"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
              <Col size="4">
                <div className="form-group">
                    <input className="form-control"
                        value={props.City}
                        type="text"
                        name="City"
                        placeholder="City *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="2">
                <div className="form-group">
                    <input className="form-control"
                        value={props.State}
                        type="text"
                        name="State"
                        placeholder="State *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.DeviceID}
                        type="text"
                        name="DeviceID"
                        placeholder="Device ID *"
                        required
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
              <Col size="2">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Zip}
                        type="text"
                        name="Zip"
                        placeholder="ZIP Code *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="4">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Email}
                        type="email"
                        name="Email"
                        placeholder="Email Address *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Upper_Temp}
                        type="number"
                        name="Upper_Temp"
                        placeholder="Upper Temp Limit (deg F) *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.DeviceID}
                        type="number"
                        name="Lower_Temp"
                        placeholder="Lower Temp Limit (deg F) *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
              <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Phone1}
                        type="tel"
                        name="Phone1"
                        placeholder="Cell Phone *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Phone2}
                        type="tel"
                        name="Phone2"
                        placeholder="Alt Phone *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Interval}
                        type="number"
                        name="Interval"
                        placeholder="Sample Interval (in seconds) *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>
          <Row>
             <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.EC_Name}
                        type="text"
                        name="EC_Name"
                        placeholder="Emergency Contact Name *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>
          <Row>
             <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.EC_Phone1}
                        type="text"
                        name="EC_Phone1"
                        placeholder="EC Phone *"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="3">
                <div className="form-group">
                    <input className="form-control"
                        value={props.EC_Phone2}
                        type="text"
                        name="EC_Phone2"
                        placeholder="EC Alt Phone"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
              <Col size="6">
                <div className="form-group">
                    <input className="form-control"
                        value={props.Comment}
                        type="text"
                        name="Comment"
                        placeholder="Comments or Instructions"
                        onChange={props.ChangeHandler}
                    />
                </div>
              </Col>
          </Row>

          <Row>
          </Row>

          <Row>
            <Col size="1">
                <button type="submit" className="submitBtn btn btn-primary" onClick={props.SubmitHandler}>
                    Submit
                </button>
            </Col>

          </Row>
      </form>
  )
}

export default UserForm
