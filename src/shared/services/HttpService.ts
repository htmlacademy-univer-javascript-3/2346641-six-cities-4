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
  _axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (err.response.status >= 399) {
        if (err.response.data) {
          if (err.response.data.detail) {
            // toast.error(err.response.data.detail);
            return Promise.reject(err);
          } else {
            // toast.error(err.response.data);
            return Promise.reject(err);
          }
        }
        // toast.error("Unhandled backend error.");
        return Promise.reject(err);
      }

      return Promise.reject(err);
    }
  );
};

export const getAxiosClient = () => _axios;

const baseQuery = axiosBaseQuery;

export const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
  baseQuery,
};
