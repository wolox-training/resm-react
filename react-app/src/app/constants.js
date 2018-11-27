import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDiceOne, faUser, faSignOutAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faDiceOne, faUser, faSignOutAlt, faQuestion);

export const LINKS = [
  { name: 'Home', to: '/', icon: 'home', restrict: false },
  { name: 'Tic-Tac-Toe', to: '/app', icon: 'dice-one', restrict: true },
  { name: 'Dashboard', to: '/user', icon: 'user', restrict: true },
  { name: 'Logout', to: '/login/logout', icon: 'sign-out-alt', restrict: true },
  { name: 'Help', to: '/help', icon: 'question', restrict: false }
];

export const CONSTANTS = { LINKS };

export default CONSTANTS;
