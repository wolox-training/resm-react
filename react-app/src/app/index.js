import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import { getUser } from '../redux/Auth/actions';

import style from './styles.scss';
import { ROUTES } from './constants';
import RestrictRoute from './components/RestrictRoute';
import Game from './screens/Game';
import Login from './screens/Login';

class App extends Component {
  componentDidMount() {
    this.props.getUser(this.props.token);
  }
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <header className={style.appHeader}>
            <img src={logo} className={style.appLogo} alt="logo" />
            <h1 className={style.appTitle}>Tic Tac Toe</h1>
          </header>
          <Switch>
            <RestrictRoute path={ROUTES.login.route} component={Login} />
            <RestrictRoute path={ROUTES.app.route} component={Game} isPrivate />
            <Redirect to={ROUTES.app.route} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  getUser: PropTypes.func
};

const mapStateToProps = state => ({
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
)(App);
