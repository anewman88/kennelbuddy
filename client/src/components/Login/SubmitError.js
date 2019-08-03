import React, { Component } from "react";

class SubmitError extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      fake: "",
    };

  }

  /**
   *
   * @constructor
   */
  render() {

    return (
      <span className={this.props.containerClass} id={this.props.type + "Error"}>
        {this.props.label}
      </span>
    )
  }
}

export default SubmitError