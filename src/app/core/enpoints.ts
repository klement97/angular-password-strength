import { environment } from './../../environments/environment';

const API_HOST = environment.apiHost;
const AUTH = `${API_HOST}/auth`;
const USERS = `${AUTH}/users`;
const SIGN_UP = `${USERS}/`;

export const ENDPOINTS = {
  SIGN_UP,
};
