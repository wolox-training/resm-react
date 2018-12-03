import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
        <h2>Login</h2>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(Login);
