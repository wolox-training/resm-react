import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ROUTES } from '../../constants';

class RestrictRoute extends Component {
  render() {
    const routesKeys = Object.keys(ROUTES);
    const routesRestrictLogged = routesKeys.find(
      key => ROUTES[key].route === this.props.path && ROUTES[key].restrictLogged
    );
    if (this.props.logged && routesRestrictLogged) {
      return <Redirect to={ROUTES.app.route} />;
    }
    if (this.props.isPrivate && this.props.logged) {
      return <Route component={this.props.component} />;
    } else if (!this.props.isPrivate) {
      return <Route component={this.props.component} />;
    }
    return <Redirect to={ROUTES.login.route} />;
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
