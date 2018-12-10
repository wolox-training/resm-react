export const ROUTES = [];
ROUTES.app = { name: 'Game', route: '/' };
ROUTES.login = { name: 'Login', route: '/login', restrictLogged: true };
ROUTES.register = { name: 'Registro', route: '/register', restrictLogged: true };

export const TOKEN_EXPIRATION_MILISECONDS = 15 * 24 * 60 * 60 * 1000;

export const CONSTANTS = { ROUTES, TOKEN_EXPIRATION_MILISECONDS };

export default CONSTANTS;
