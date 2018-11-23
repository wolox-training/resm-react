import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
        <h2>Login</h2>
        {this.props.logged ? <Redirect to="/app" /> : <Route path="/login" component={LoginForm} />}
      </div>
    );
  }
}

Login.propTypes = {
  logged: PropTypes.bool
};

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(Login);
