import Axios from '../axios';
import Cookies from 'js-cookie';

const TOKEN_KEY = 'login-token';

const _clearCredentials = () => {
  delete Axios.defaults.headers.common['Authorization'];
  Cookies.remove(TOKEN_KEY);
};

const authenticate = async ({ username, password }) => {
  try {
    const { data } = await Axios.post('/login', { username, password });
    const { token } = data;
    if (token) {
      Axios.defaults.headers.common['Authorization'] = token;
      Cookies.set(TOKEN_KEY, token);
    } else {
      _clearCredentials();
    }
    window.location.reload();
  } catch (error) {
    alert('Login failed!!');
  }
};

const isUserLoggedIn = () => Boolean(Cookies.get(TOKEN_KEY));

const performLogout = () => {
  _clearCredentials();
  window.location.reload();
};

const authServices = { authenticate, isUserLoggedIn, performLogout };

export default authServices;
