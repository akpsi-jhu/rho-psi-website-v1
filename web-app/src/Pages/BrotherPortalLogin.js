import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext.js';
import { TextField, Button, Stack, Typography, Box } from '@mui/material';
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer.js";
import SideBar from "../Components/Sidebar/Sidebar.js";
import { BrotherApi } from "../api/Firestore/BrotherApi.ts";

const BrotherPortalLogin = () => {
  var [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const fixedPassword = 'akpsirhopsi1904';
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const api = new BrotherApi();

  const [brothers, setBrothers] = useState([]);
  useEffect(() => {
      api.getBrothersList().then(result => {
          setBrothers(result);
      })
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const brotherEmails = brothers.map(brother => brother.jhuEmail); // Extract emails from brothers list
    email = email.toLowerCase()
    if (password === fixedPassword && brotherEmails.includes(email)) {
      setAuthenticated(true);
      navigate('/brotherPortal');
    } else {
      alert('Invalid credentials');
    }
  };
  
  return (
    <Stack alignItems='center' sx={{ minHeight: '100vh', justifyContent: 'space-between' }}> {/* Adjusted for sticky footer */}
      <Navbar toggle={toggle} blue={true}></Navbar>
      <SideBar isOpen={isOpen} toggle={toggle}/>              
      <Box sx={{ width: '100%', maxWidth: 500, mt: 8, mb: 8, marginTop: 20 }}>
        <Typography component="h1" variant="h5">
          Login to Brother Portal
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
            sx={{ mt: 3, mb: 2, bgcolor: '#0C406F'}} // Custom color
          >
            Login
          </Button>
        </Box>
      </Box>
      <Footer></Footer>
    </Stack>
  );
};

export default BrotherPortalLogin;
