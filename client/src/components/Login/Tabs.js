import React, { Component } from "react";

class Tabs extends Component {

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
      <div className={this.props.containerClass}>
        <div
          className={
            (this.props.inactive ? "disabled" : "") +
            (this.props.currentTab === "login" ? " active" : "")
          }
          onClick={() => {
            if (!this.props.inactive) {
              this.props.loginClick();
            }
          }}
        >
          {this.props.loginLabel}
        </div>
        <div
          className={
            (this.props.inactive ? "disabled" : "") +
            (this.props.currentTab === "register" ? " active" : "")
          }
          onClick={() => {
            if (!this.props.inactive) {
              this.props.registerClick();
            }
          }}
        >
          {this.props.registerLabel}
        </div>
      </div>
    )
  }
}

export default Tabs