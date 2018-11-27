import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from './styles.scss';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Points from './components/Points';

class Userpage extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
        <span>{`Name: ${this.props.user.name}`}</span>
        &nbsp;
        <span>{`Username: ${this.props.user.username}`}</span>
        &nbsp;
        <span>{`email: ${this.props.user.email}`}</span>
        &nbsp;
        <h2>User page</h2>
        <div className={style.userbarNav}>
          <NavLink to="/user" exact className={style.userbarLink} activeClassName={style.userbarActive}>
            Dashboard
          </NavLink>
          <NavLink
            to="/user/points"
            exact
            className={style.userbarLink}
            activeClassName={style.userbarActive}
          >
            Points
          </NavLink>
          <NavLink
            to="/user/profile"
            exact
            className={style.userbarLink}
            activeClassName={style.userbarActive}
          >
            Profile
          </NavLink>
        </div>
        <Switch>
          <Route path="/user/points" component={Points} />
          <Route path="/user/profile" component={Profile} />
          <Route path="/user" component={Dashboard} />
          <Redirect to="/user" />
        </Switch>
      </div>
    );
  }
}

Userpage.propTypes = {
  user: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  user: state.auth.user
});

export default connect(mapStateToProps)(Userpage);
