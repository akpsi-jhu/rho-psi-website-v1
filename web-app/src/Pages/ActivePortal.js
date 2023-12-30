import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ActivePortal = ({ setAuth }) => {
  const handleLogout = () => {
    // Logout logic here
    setAuth(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Active Portal
        </Typography>
        {/* Insert additional portal content here */}
        
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default ActivePortal;
