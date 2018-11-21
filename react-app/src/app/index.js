import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from '../redux/store';
import logo from '../logo.svg';

import style from './styles.scss';
import Game from './screens/Game';
import Login from './screens/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={style.app}>
            <header className={style.appHeader}>
              <img src={logo} className={style.appLogo} alt="logo" />
              <h1 className={style.appTitle}>Tic Tac Toe</h1>
            </header>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/app" component={Game} />
              <Redirect to="/login" />
            </Switch>
            {/* <Game /> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
