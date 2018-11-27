import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../../../../../redux/Auth/actions';

class Logout extends Component {
  render() {
    this.props.logout();
    return <Redirect to="/login" />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
