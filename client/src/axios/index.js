import axios from 'axios';
import authServices from '../services/authServices';

const Axios = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  (config) => {
    if (config.authorization !== false) {
      const token = authServices.getCurrentAccessToken();
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
