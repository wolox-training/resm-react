import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDiceOne, faUser, faSignOutAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';

import { removeState } from '../redux/localStorage';
import { logout } from '../redux/Auth/actions';

// eslint-disable-next-line
const handleLogout = () => {
  removeState('token');
  removeState('tokenExpireDateTime');
  // TODO: why does not work?
  logout();
};

library.add(faHome, faDiceOne, faUser, faSignOutAlt, faQuestion);

export const ROUTES = [];
ROUTES.home = { name: 'Home', route: '/' };
ROUTES.app = { name: 'Game', route: '/app' };
ROUTES.login = { name: 'Login', route: '/login' };
ROUTES.help = { name: 'Help', route: '/help' };
ROUTES.user = { name: 'Dashboard', route: '/user' };
ROUTES.points = { name: 'Points', route: '/user/points' };
ROUTES.history = { name: 'History', route: '/user/history' };

export const LINKS = {
  topBar: [
    { name: ROUTES.home.name, to: ROUTES.home.route, icon: 'home', restrict: false },
    { name: ROUTES.app.name, to: ROUTES.app.route, icon: 'dice-one', restrict: true },
    // { name: ROUTES.user.name, to: ROUTES.user.route, icon: 'user', restrict: true },
    { name: 'Logout', to: ROUTES.login.route, icon: 'sign-out-alt', restrict: true, onClick: handleLogout },
    { name: ROUTES.help.name, to: ROUTES.help.route, icon: 'question', restrict: false }
  ],
  user: [
    { name: ROUTES.user.name, to: ROUTES.user.route, icon: 'user', restrict: true },
    { name: ROUTES.points.name, to: ROUTES.points.route, icon: 'user', restrict: true },
    { name: ROUTES.history.name, to: ROUTES.history.route, icon: 'user', restrict: true }
  ]
};

export const TOKEN_EXPIRATION_MILISECONDS = 15 * 24 * 60 * 60 * 1000;

export const CONSTANTS = { LINKS, ROUTES, TOKEN_EXPIRATION_MILISECONDS };

export default CONSTANTS;
