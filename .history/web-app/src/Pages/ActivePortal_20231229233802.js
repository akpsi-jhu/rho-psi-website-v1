import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'; // Import AuthContext
import { Box, Container, Typography, Button } from '@mui/material';

const ActivePortal = () => {
  const { setAuthenticated } = useContext(AuthContext); // Use AuthContext for authentication state
  const navigate = useNavigate(); // For redirection after logout

  const handleLogout = () => {
    setAuthenticated(false); // Update authentication state
    navigate('/login'); // Redirect to login after logout
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
