import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
          {this.props.logged && <Redirect to="/app" />}
          <Route path="/login" component={LoginForm} />
        </Switch>
        {/* {this.props.logged ? <Redirect to="/app" /> : <Route path="/login" component={LoginForm} />} */}
        {/* {this.props.logged && <Redirect to="/app" /> */}
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
