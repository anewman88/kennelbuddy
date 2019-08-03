import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "./../components/Login/Tabs";
import CloseBtn from "./../components/Login/Close";
import SubmitError from "./../components/Login/SubmitError";
import Loader from "./../components/Login/Loader";
import FormWrap from "./../components/Login/FormWrap";

require("./less/style.less");

class ModalLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: this.props.initialTab ? this.props.initialTab : "login",
      newTab: this.props.newTab
    };

    this.keyHandler = this.keyHandler.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTab && nextProps.newTab !== this.state.currentTab) {
      this.setState({
        currentTab: nextProps.newTab
      });
    }

    if (!this.props.visible && nextProps.visible) {
      this.setState({
        currentTab: this.props.initialTab ? this.props.initialTab : "login"
      });
    }
  }

  /**
   *
   * @param e
   */
  keyHandler(e) {
    e = e || window.event;

    let isEscape = false;
    let isEnter = false;

    if ("key" in e) {
      isEscape = e.key === "Escape" || e.key === "Esc";
      isEnter = e.key === "Enter" || e.key === "enter";
    } else {
      isEscape = e.keyCode === 27;
      isEnter = e.keyCode === 13;
    }

    if (isEscape) {
      this.onCloseModal();
    }
    if (isEnter) {
      if (
        this.state.currentTab === "register" &&
        this.props.form &&
        this.props.form.onRegister
      ) {
        this.props.form.onRegister();
      } else if (
        this.state.currentTab === "login" &&
        this.props.form &&
        this.props.form.onLogin
      ) {
        this.props.form.onLogin();
      }
    }
  }

  /**
   *
   */
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyHandler);
  }

  /**
   *
   */
  componentDidUpdate(prevProps, prevState) {
    document.removeEventListener("keydown", this.keyHandler);

    if (this.props.visible) {
      document.addEventListener("keydown", this.keyHandler);
    }

    if (prevState.currentTab !== this.state.currentTab) {
      if (this.props.tabs.afterChange) {
        this.props.tabs.afterChange();
      }
    }
  }


  /**
   *
   */
  tabsLoginClick() {
    if (this.props.tabs && this.props.tabs.onLoginClickBeforeTransition) {
      this.props.tabs.onLoginClickBeforeTransition();
    }

    this.setState(
      {
        currentTab: "login"
      },
      () => {
        if (this.props.tabs && this.props.tabs.onLoginClickAfterTransition) {
          this.props.tabs.onLoginClickAfterTransition();
        }
      }
    );
  }

  /**
   *
   */
  tabsRegisterClick() {
    if (this.props.tabs && this.props.tabs.onRegisterClickBeforeTransition) {
      this.props.tabs.onRegisterClickBeforeTransition();
    }

    this.setState(
      {
        currentTab: "register"
      },
      () => {
        if (this.props.tabs && this.props.tabs.onRegisterClickAfterTransition) {
          this.props.tabs.onRegisterClickAfterTransition();
        }
      }
    );
  }

  recoverPasswordAnchorClick() {
    this.setState({
      currentTab: "recoverPassword"
    });
  }

  /**
   *
   */
  onCloseModal() {
    if (this.props.onBeforeCloseModal) {
      this.props.onBeforeCloseModal();
    }

    this.props.onCloseModal();

    if (this.props.onAfterCloseModal) {
      this.props.onAfterCloseModal();
    }
  }

  /**
   *
   * @constructor
   */
  render() {

    const tabs = this.props.tabs ? (
      <Tabs
        containerClass={
          this.props.tabs.containerClass
            ? this.props.tabs.containerClass
            : "RML-login-modal-mode"
        }
        inactive={this.props.loading ? this.props.loading : false}
        loginClick={this.tabsLoginClick.bind(this)}
        registerClick={this.tabsRegisterClick.bind(this)}
        currentTab={this.state.currentTab}
        loginLabel={
          this.props.tabs.loginLabel ? this.props.tabs.loginLabel : "Sign in"
        }
        registerLabel={
          this.props.tabs.registerLabel
            ? this.props.tabs.registerLabel
            : "Sign up"
        }
      />
    ) : null;

    const closeBtn = this.props.closeBtn.element ? (
      <div onClick={() => this.onCloseModal()}>
        {this.props.closeBtn.element}
      </div>
    ) : (
      <CloseBtn
        containerClass={
          this.props.closeBtn.containerClass
            ? this.props.closeBtn.containerClass
            : "RML-login-modal-close"
        }
        click={() => this.onCloseModal()}
      />
    );

    let errorClass = null;
    let errorLabel = "";

    if (this.props.error) {
      switch (this.state.currentTab) {
        case "login":
          errorClass = this.props.loginError.containerClass
            ? this.props.loginError.containerClass
            : "RML-login-modal-error";
          errorLabel = this.props.loginError.label
            ? this.props.loginError.label
            : "Unable to login. Please check values.";
          break;

        case "register":
          errorClass = this.props.registerError.containerClass
            ? this.props.registerError.containerClass
            : "RML-login-modal-error";
          errorLabel = this.props.registerError.label
            ? this.props.registerError.label
            : "Unable to create account. Please check values.";
          break;

        case "recoverPassword":
          errorClass = this.props.recoverPasswordError.containerClass
            ? this.props.recoverPasswordError.containerClass
            : "RML-login-modal-error";
          errorLabel = this.props.recoverPasswordError.label
            ? this.props.recoverPasswordError.label
            : "Unable to recover password.  Please check values.";
          break;
      }
    }

    const errorWrap = this.props.error ? (
      <SubmitError
        type={this.state.currentTab}
        containerClass={errorClass}
        label={errorLabel}
      />
    ) : null;

    const loader =
      this.props.loading && !this.props.loader.disabled ? (
        <Loader
          containerClass={
            this.props.loader.containerClass
              ? this.props.loader.containerClass
              : "RML-login-modal-indicator"
          }
          onStartLoading={this.props.startLoading}
          size={24}
        />
      ) : null;

    const formWrap =
      this.props.form && !this.props.form.disabled ? (
        <FormWrap
          currentTab={this.state.currentTab}
          form={this.props.form}
          inactive={this.props.loading}
          loader={loader}
          errorWrap={errorWrap}
          visible={this.props.visible}
          recoverPasswordAnchorClick={this.recoverPasswordAnchorClick.bind(
            this
          )}
          recoverPasswordSuccessLabel={
            this.props.form.recoverPasswordSuccessLabel
          }
        />
      ) : null;

    const additionalWrap =
      (!this.props.form || this.props.form.disabled) &&
      !this.props.additionalWrap.disabled &&
      (this.props.loading || this.props.error) ? (
        <div
          className={
            this.props.additionalWrap.containerClass
              ? this.props.additionalWrap.containerClass
              : "RML-login-modal-additional-wrap"
          }
        >
          {errorWrap}
          {loader}
        </div>
      ) : null;

    const LoginContainer =
      this.props.LoginContainer && this.state.currentTab === "login"
        ? this.props.LoginContainer
        : null;

    const RegisterContainer =
      this.props.RegisterContainer &&
      this.state.currentTab === "register"
        ? this.props.RegisterContainer
        : null;

    const RecoverPasswordContainer =
      this.props.RecoverPasswordContainer &&
      this.state.currentTab === "recoverPassword"
        ? this.props.RecoverPasswordContainer
        : null;

    return (
      <div
        id={this.props.mainWrapId ? this.props.mainWrapId : ""}
        className={
          (this.props.mainWrapClass
            ? this.props.mainWrapClass
            : "RML-login-modal-wrap ") + (this.props.visible ? "" : "hidden")
        }
      >
        <div
          className={
            this.props.overlayClass
              ? this.props.overlayClass
              : "RML-login-modal-overlay"
          }
          onClick={() => this.onCloseModal()}
        />

        <div className={this.props.visible ? "RML-login-modal-box" : "hidden"}>
          <div
            className={
              this.props.visible ? "RML-login-modal-box-content" : "hidden"
            }
          >
            {closeBtn}
            {tabs}
            <div className="RML-social-modal-content-wrap">
              {LoginContainer}
              {RegisterContainer}
              {RecoverPasswordContainer}

              {formWrap}
              {additionalWrap}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalLogin.defaultProps = {
  closeBtn: {},
  tabs: {},
  loader: {},
  additionalWrap: {},
  loginError: {},
  registerError: {},
  recoverPasswordError: {}
};

ModalLogin.propTypes = {
  mainWrapClass: PropTypes.string,
  mainWrapId: PropTypes.string,

  initialTab: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onBeforeCloseModal: PropTypes.func,
  onAfterCloseModal: PropTypes.func,

  newTab: PropTypes.string,

  overlayClass: PropTypes.string,

  loginError: PropTypes.shape({
    containerClass: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  registerError: PropTypes.shape({
    containerClass: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  recoverPasswordError: PropTypes.shape({
    containerClass: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),

  loader: PropTypes.shape({
    disabled: PropTypes.bool,
    containerClass: PropTypes.string
  }),

  closeBtn: PropTypes.shape({
    containerClass: PropTypes.string,
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),

  tabs: PropTypes.shape({
    containerClass: PropTypes.string,
    afterChange: PropTypes.func,
    loginLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    registerLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  additionalWrap: PropTypes.shape({
    containerClass: PropTypes.string,
    disabled: PropTypes.bool
  }),

  form: PropTypes.shape({
    onLogin: PropTypes.func,
    onRegister: PropTypes.func,
    onRecoverPassword: PropTypes.func,

    bottomLoginContainer: PropTypes.element,
    bottomRegisterContainer: PropTypes.element,
    bottomRecoverPasswordContainer: PropTypes.element,

    LoginContainer: PropTypes.element,
    RegisterContainer: PropTypes.element,
    RecoverPasswordContainer: PropTypes.element,

    registerContainerClass: PropTypes.string,
    loginContainerClass: PropTypes.string,
    recoverPasswordContainerClass: PropTypes.string,

    recoverPasswordSuccessLabel: PropTypes.shape({
      labelClass: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),

    recoverPasswordAnchor: PropTypes.shape({
      anchorClass: PropTypes.string,
      inactive: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),

    loginBtn: PropTypes.shape({
      buttonClass: PropTypes.string,
      inactive: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),
    registerBtn: PropTypes.shape({
      buttonClass: PropTypes.string,
      inactive: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),
    recoverPasswordBtn: PropTypes.shape({
      buttonClass: PropTypes.string,
      inactive: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),
    loginInputs: PropTypes.arrayOf(
      PropTypes.shape({
        containerClass: PropTypes.string,
        type: PropTypes.string,
        inputClass: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,

        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      })
    ),
    registerInputs: PropTypes.arrayOf(
      PropTypes.shape({
        containerClass: PropTypes.string,
        type: PropTypes.string,
        inputClass: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,

        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      })
    ),
    recoverPasswordInputs: PropTypes.arrayOf(
      PropTypes.shape({
        containerClass: PropTypes.string,
        type: PropTypes.string,
        inputClass: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,

        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      })
    )
  })
}

export default ModalLogin;
