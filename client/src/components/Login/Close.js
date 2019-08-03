import React, { Component } from "react";
import CloseIcon from "./CloseIcon";

class CloseBtn extends Component {

  constructor(props) {
    super(props);
  }

  /**
   *
   * @constructor
   */
  render() {

    return (
      <div
        className={this.props.containerClass}
        onClick={() => this.props.click()}
      >
        <CloseIcon />
      </div>
    )
  }
}

export default CloseBtn