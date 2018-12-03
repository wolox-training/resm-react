import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PublicRoute extends Component {
  render() {
    if (this.props.logged && this.props.path === '/login') {
      return <Redirect to="/" />;
    }
    return <Route component={this.props.component} />;
  }
}

PublicRoute.propTypes = {
  logged: PropTypes.bool,
  component: PropTypes.element,
  path: PropTypes.string
};

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(PublicRoute);
