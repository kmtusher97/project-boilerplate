import authServices from '../services/authServices';

export const useAuth = () => {
  const isAuthenticated = () => authServices.isUserLoggedIn();

  const onLogout = () => authServices.performLogout();

  return { isAuthenticated, onLogout };
};
