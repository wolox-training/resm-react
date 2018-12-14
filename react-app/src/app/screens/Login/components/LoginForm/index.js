import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUser } from '../../../../../redux/Auth/actions';

import LoginFormLayout from './layout';

class LoginForm extends Component {
  submitForm = ({ email, pass }) => {
    this.props.getUser(email, pass);
  };
  render() {
    return <LoginFormLayout messageLogin={this.props.messageLogin} submitForm={this.submitForm} />;
  }
}

LoginForm.propTypes = {
  messageLogin: PropTypes.string,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messageLogin: state.auth.messageLogin
});

const mapDispatchToProps = dispatch => ({
  getUser: (email, pass) => {
    dispatch(getUser({ email, pass }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
