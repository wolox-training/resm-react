import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from '../redux/store';
import logo from '../logo.svg';

import style from './styles.scss';
import RestrictRoute from './components/RestrictRoute';
import Game from './screens/Game';
import Login from './screens/Login';

// TODO: react-router-redux implementation
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
              <RestrictRoute path="/app" component={Game} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
