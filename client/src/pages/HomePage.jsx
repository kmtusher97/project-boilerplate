import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar } from '../components/Navbar';

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};
