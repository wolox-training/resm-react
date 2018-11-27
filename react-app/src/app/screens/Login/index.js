import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './styles.scss';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

class Login extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
        <h2>Login</h2>
        <Switch>
          <Route path="/login/logout" component={Logout} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

export default Login;
