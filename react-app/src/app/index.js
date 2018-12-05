import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import logo from '../logo.svg';

import style from './styles.scss';
import RestrictRoute from './components/RestrictRoute';
import Game from './screens/Game';
import Login from './screens/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <header className={style.appHeader}>
            <img src={logo} className={style.appLogo} alt="logo" />
            <h1 className={style.appTitle}>Tic Tac Toe</h1>
          </header>
          <Switch>
            <RestrictRoute path="/login" component={Login} />
            <RestrictRoute path="/" component={Game} isPrivate />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
