import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LINKS, ROUTES } from './constants';
import style from './styles.scss';
import PublicRoute from './components/PublicRoute';
import RestrictRoute from './components/RestrictRoute';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Game from './screens/Game';
import Login from './screens/Login';
import Help from './screens/Help';
import User from './screens/User';
import History from './screens/User/components/History';
import Points from './screens/User/components/Points';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <Topbar
            title="Tic Tac Toe"
            logo="/tictactoe-logo.png"
            links={LINKS.topBar}
            className={style.appTopbar}
            logged={this.props.logged}
            user={this.props.user}
          />
          <div className={style.appUserbar}>
            <Navbar links={LINKS.user} logged={this.props.logged} />
          </div>
          <Switch>
            <Route path={ROUTES.home.route} exact component={Home} />
            <PublicRoute path={ROUTES.login.route} component={Login} />
            <PublicRoute path={ROUTES.help.route} component={Help} />
            <RestrictRoute path={ROUTES.app.route} component={Game} />
            <Switch>
              <RestrictRoute path={ROUTES.user.route} exact component={User} />
              <RestrictRoute path={ROUTES.points.route} component={Points} />
              <RestrictRoute path={ROUTES.history.route} component={History} />
              <Redirect to={ROUTES.user.route} />
            </Switch>
            <Redirect to={ROUTES.home.route} />
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
