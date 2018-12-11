import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../redux/Auth/actions';

import { LINKS, ROUTES } from './constants';
import style from './styles.scss';
import withLoading from './components/HOC/WithLoading';
import RestrictRoute from './components/RestrictRoute';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Game from './screens/Game';
import Login from './screens/Login';
import Help from './screens/Help';
import User from './screens/User';
import History from './screens/User/components/History';
import Points from './screens/User/components/Points';

class App extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.getUser(this.props.token);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <Topbar
            title="Tic Tac Toe"
            logo="/tictactoe-logo.png"
            links={LINKS.topBar}
            className={style.appTopbar}
            logged={this.props.logged}
            user={this.props.user}
          />
          <div className={style.appUserbar}>
            <Navbar links={LINKS.user} logged={this.props.logged} />
          </div>
          <Switch>
            <RestrictRoute path={ROUTES.app.route} exact component={Game} isPrivate />
            <RestrictRoute path={ROUTES.login.route} component={Login} />
            <RestrictRoute path={ROUTES.help.route} component={Help} />
            <Switch>
              <RestrictRoute
                exact
                path={ROUTES.user.route}
                component={withLoading(User, this.props.userLoading)}
                isPrivate
              />
              <RestrictRoute
                path={ROUTES.points.route}
                component={withLoading(Points, this.props.userLoading)}
                isPrivate
              />
              <RestrictRoute
                path={ROUTES.history.route}
                component={withLoading(History, this.props.userLoading)}
                isPrivate
              />
              <Redirect to={ROUTES.user.route} />
            </Switch>
            <Redirect to={ROUTES.app.route} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  logged: PropTypes.bool,
  token: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.string),
  userLoading: PropTypes.bool,
  getUser: PropTypes.func
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  token: state.auth.token,
  user: state.auth.user,
  userLoading: state.auth.userLoading
});

const mapDispatchToProps = dispatch => ({
  getUser: token => {
    dispatch(authActions.getUser({ token }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
