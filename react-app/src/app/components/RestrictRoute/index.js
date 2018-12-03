import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser } from '../../../redux/Auth/actions';

class RestrictRoute extends Component {
  render() {
    this.props.getUser(this.props.token);
    if (this.props.logged) {
      return <Route component={this.props.component} />;
    }
    return <Redirect to="/login" />;
  }
}

RestrictRoute.propTypes = {
  logged: PropTypes.bool,
  token: PropTypes.string,
  getUser: PropTypes.func,
  component: PropTypes.element
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  getUser: token => {
    dispatch(getUser({ token }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestrictRoute);
