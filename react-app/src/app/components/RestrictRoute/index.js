import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
  component: PropTypes.element
};

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(RestrictRoute);
