import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RestrictRoute extends Component {
  render() {
    // TODO: where should this be done?
    // this.props.getUser(this.props.token);
    if (this.props.logged && this.props.path === '/login') {
      return <Redirect to="/" />;
    }
    if (this.props.isPrivate && this.props.logged) {
      return <Route component={this.props.component} />;
    } else if (!this.props.isPrivate) {
      return <Route component={this.props.component} />;
    }
    return <Redirect to="/login" />;
  }
}

RestrictRoute.propTypes = {
  logged: PropTypes.bool,
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.element
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  token: state.auth.token
});

export default connect(mapStateToProps)(RestrictRoute);
