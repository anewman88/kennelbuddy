import React, { Component } from "react";

class FormSubmitButton extends Component {

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
      <button
        className={this.props.buttonClass}
        disabled={this.props.inactive}
        onClick={() => this.props.click()}
        id={this.props.type + "Submit"}
      >
        {this.props.label}
      </button>
    )
  }
}

export default FormSubmitButton