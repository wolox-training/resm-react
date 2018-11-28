import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// TODO: if the current date is greater than the date tokenExpireDateTime then invalidate token and redirect to login
// TODO: delete eslint-disable-next-line
class RestrictRoute extends Component {
  render() {
    if (!this.props.logged) {
      return <Redirect to="/login" />;
    }
    return <Route component={this.props.component} />;
  }
}

RestrictRoute.propTypes = {
  logged: PropTypes.bool,
  // eslint-disable-next-line
  component: PropTypes.object
};

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(RestrictRoute);
