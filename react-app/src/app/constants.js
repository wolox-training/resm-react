import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDiceOne, faUser, faSignOutAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faDiceOne, faUser, faSignOutAlt, faQuestion);

export const LINKS = [
  { name: 'Home', to: '/', icon: 'home', restrict: false },
  { name: 'Tic-Tac-Toe', to: '/app', icon: 'dice-one', restrict: true },
  { name: 'Dashboard', to: '/user', icon: 'user', restrict: true },
  { name: 'Logout', to: '/', icon: 'sign-out-alt', restrict: true, isLogout: true },
  { name: 'Help', to: '/help', icon: 'question', restrict: false }
];

export const TOKEN_EXPIRATION_MILISECONDS = 15 * 24 * 60 * 60 * 1000;

export const CONSTANTS = { LINKS, TOKEN_EXPIRATION_MILISECONDS };

export default CONSTANTS;
