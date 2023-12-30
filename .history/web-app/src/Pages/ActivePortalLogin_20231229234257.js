import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'; // Import AuthContext
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar/Sidebar";

const ActivePortalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthenticated } = useContext(AuthContext); // Use AuthContext for authentication state
  const navigate = useNavigate(); // For redirection after login
  const fixedPassword = 'akpsi123'; // Replace with your fixed password

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (password === fixedPassword) {
      setAuthenticated(true);
      navigate('/activeportal'); // Redirect to the portal after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="xs">
        <Navbar toggle={toggle} blue={true}></Navbar>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login to Active Portal
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ActivePortalLogin;
