import { AUTH_TOKEN_KEY } from 'shared/const';

const get = () => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';

const save = (token: string) => localStorage.setItem(AUTH_TOKEN_KEY, token);

const drop = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export const TokenService = { get, save, drop };
