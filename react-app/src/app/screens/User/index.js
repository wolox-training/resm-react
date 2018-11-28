import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import style from './styles.scss';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Points from './components/Points';

class Userpage extends Component {
  render() {
    return (
      <div className={style.loginLayout}>
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
            to="/user/history"
            exact
            className={style.userbarLink}
            activeClassName={style.userbarActive}
          >
            History
          </NavLink>
        </div>
        <Switch>
          <Route path="/user/points" component={Points} />
          <Route path="/user/history" component={History} />
          <Route path="/user" component={Dashboard} />
          <Redirect to="/user" />
        </Switch>
      </div>
    );
  }
}

export default Userpage;
