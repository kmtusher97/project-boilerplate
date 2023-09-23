import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { AuthContext } from '../contexts/AuthContext';

export const SecureRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { setOpenLoginRegistrationForm } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated()) {
      setOpenLoginRegistrationForm(true);
      navigate('/');
    }
  }, [isAuthenticated, navigate, setOpenLoginRegistrationForm]);

  if (isAuthenticated()) {
    return children;
  }

  return null;
};
