import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { useAuth } from '../hooks/useAuth';
import { AuthContext } from '../contexts/AuthContext';

import { LoginRegistrationForm } from './LoginRegistrationForm';

export const Navbar = () => {
  const navigate = useNavigate();
  const { openLoginRegistrationForm, setOpenLoginRegistrationForm } =
    useContext(AuthContext);

  const { isAuthenticated, onLogout } = useAuth();

  const handleClickOpen = () => {
    setOpenLoginRegistrationForm(true);
  };

  const handleClose = () => {
    setOpenLoginRegistrationForm(false);
  };

  return (
    <Box sx={{ height: '80px', width: '100%' }}>
      <AppBar position="static" component="nav">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">LMS</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" onClick={() => navigate('/')}>
              About
            </Button>

            {isAuthenticated() && (
              <Button color="inherit" onClick={() => navigate('/courses')}>
                Courses
              </Button>
            )}

            {isAuthenticated() ? (
              <Button color="inherit" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            )}

            <LoginRegistrationForm
              open={openLoginRegistrationForm}
              handleClose={handleClose}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
