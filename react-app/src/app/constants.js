import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faDiceOne,
  faUser,
  faSignOutAlt,
  faQuestion,
  faHistory,
  faDice
} from '@fortawesome/free-solid-svg-icons';

import store from '../redux/store';
import { logout } from '../redux/Auth/actions';

// eslint-disable-next-line
const handleLogout = () => {
  store.dispatch(logout());
};

library.add(faHome, faDiceOne, faUser, faSignOutAlt, faQuestion, faHistory, faDice);

export const ROUTES = [];
ROUTES.app = { name: 'Game', route: '/' };
ROUTES.login = { name: 'Login', route: '/login' };
ROUTES.help = { name: 'Help', route: '/help' };
ROUTES.user = { name: 'Dashboard', route: '/user' };
ROUTES.points = { name: 'Points', route: '/user/points' };
ROUTES.history = { name: 'History', route: '/user/history' };

export const LINKS = {
  topBar: [
    { name: ROUTES.app.name, to: ROUTES.app.route, icon: 'dice-one', restrict: true },
    { name: 'Logout', icon: 'sign-out-alt', restrict: true, onClick: handleLogout },
    { name: ROUTES.help.name, to: ROUTES.help.route, icon: 'question', restrict: false }
  ],
  user: [
    { name: ROUTES.user.name, to: ROUTES.user.route, icon: 'user', restrict: true },
    { name: ROUTES.points.name, to: ROUTES.points.route, icon: 'dice', restrict: true },
    { name: ROUTES.history.name, to: ROUTES.history.route, icon: 'history', restrict: true }
  ]
};

export const TOKEN_EXPIRATION_MILISECONDS = 15 * 24 * 60 * 60 * 1000;

export const CONSTANTS = { LINKS, ROUTES, TOKEN_EXPIRATION_MILISECONDS };

export default CONSTANTS;
