import { createContext, useState } from 'react';

export const AuthContext = createContext({
  openLoginRegistrationForm: false,
  setOpenLoginRegistrationForm: () => {},
});

export const AuthProvider = ({ children }) => {
  const [openLoginRegistrationForm, setOpenLoginRegistrationForm] =
    useState(false);

  return (
    <AuthContext.Provider
      value={{
        openLoginRegistrationForm,
        setOpenLoginRegistrationForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
