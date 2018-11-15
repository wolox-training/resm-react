import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';
import logo from '../logo.svg';

import style from './styles.scss';
import Game from './screens/Game';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={style.app}>
          <header className={style.appHeader}>
            <img src={logo} className={style.appLogo} alt="logo" />
            <h1 className={style.appTitle}>Tic Tac Toe</h1>
          </header>
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
