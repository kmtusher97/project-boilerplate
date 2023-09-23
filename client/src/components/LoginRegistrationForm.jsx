import { useState } from 'react';
import { Dialog } from '@mui/material';

import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';

export const LoginRegistrationForm = ({ open, handleClose }) => {
  const [formType, setFormType] = useState('login');

  return (
    <Dialog open={open} onClose={handleClose}>
      {formType === 'login' ? (
        <LoginForm setFormType={setFormType} />
      ) : (
        <RegistrationForm setFormType={setFormType} />
      )}
    </Dialog>
  );
};
