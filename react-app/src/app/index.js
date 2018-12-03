import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../redux/Auth/actions';

import { LINKS } from './constants';
import style from './styles.scss';
import Topbar from './components/Topbar';
import PublicRoute from './components/PublicRoute';
import RestrictRoute from './components/RestrictRoute';
import Home from './screens/Home';
import Game from './screens/Game';
import Login from './screens/Login';
import User from './screens/User';
import Help from './screens/Help';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <Topbar
            title="Tic Tac Toe"
            logo="/tictactoe-logo.png"
            links={LINKS}
            className={style.appTopbar}
            logged={this.props.logged}
            logout={this.props.logout}
            user={this.props.user}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/help" component={Help} />
            <RestrictRoute path="/app" component={Game} />
            <RestrictRoute path="/user" component={User} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  logged: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.string),
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
