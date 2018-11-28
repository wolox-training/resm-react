import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './styles.scss';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

// TODO: delete the visualization of 'logged' commment
class Login extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
        <h2>Login</h2>
        <Switch>
          <Route path="/login/logout" component={Logout} />
          <Route path="/login" component={LoginForm} />
        </Switch>
        {/* {`logged: ${this.props.logged}`} */}
        {/* {this.props.logged ? <Redirect to="/app" /> : <Route path="/login" component={LoginForm} />} */}
      </div>
    );
  }
}

export default Login;
