import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from 'shared/const';
import { TokenService } from './TokenService';
import { axiosBaseQuery } from './axiosBaseQuery';

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

const _axios = axios.create({ baseURL: BASE_URL, timeout: REQUEST_TIMEOUT });

const configure = () => {
  _axios.interceptors.request.use((config) => {
    const token = TokenService.get();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });
};

export const getAxiosClient = () => _axios;

const baseQuery = axiosBaseQuery;

export const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
  baseQuery,
};
