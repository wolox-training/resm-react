import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LINKS } from './constants';
import style from './styles.scss';
import Topbar from './components/Topbar';
import RestrictRoute from './components/RestrictRoute';
import Game from './screens/Game';
import Login from './screens/Login';
import User from './screens/User';
import Help from './screens/Help';

// TODO: react-router-redux implementation
class App extends Component {
  render() {
    // TODO: delete div with sessions vars
    // TODO: pass colors vars from colors.scss
    const styleTopbar = {
      backgroundColor: '#222',
      color: '#fff'
    };
    return (
      <BrowserRouter>
        <div className={style.app}>
          <div>
            <span>{`Logged: ${this.props.logged}`}</span>
            &nbsp;
            <span>{`Name: ${this.props.user.name}`}</span>
            &nbsp;
            <span>{`Username: ${this.props.user.username}`}</span>
            &nbsp;
            <span>{`email: ${this.props.user.email}`}</span>
          </div>
          <Topbar
            title="Tic Tac Toe"
            logo="/tictactoe-logo.png"
            links={LINKS}
            style={styleTopbar}
            logged={this.props.logged}
            user={this.props.user}
          />
          <Switch>
            <Route path="/login" component={Login} />
            <RestrictRoute path="/app" component={Game} />
            <RestrictRoute path="/user" component={User} />
            <Route path="/help" component={Help} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  logged: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  user: state.auth.user
});

export default connect(mapStateToProps)(App);
