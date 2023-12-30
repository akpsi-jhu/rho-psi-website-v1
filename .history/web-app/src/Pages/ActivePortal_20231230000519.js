import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { Box, Stack, Typography, Button } from '@mui/material';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar/Sidebar";

const ActivePortal = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <Stack sx={{ minHeight: '100vh', justifyContent: 'space-between' }}>
      <Navbar toggle={toggle} blue={true}></Navbar>
      <SideBar isOpen={isOpen} toggle={toggle}/>  
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Active Portal
        </Typography>
        {/* Insert additional portal content here */}
        <Button variant="contained" onClick={handleLogout} sx={{ backgroundColor: "#0C406F", mt: 2 }}>
          Logout
        </Button>
      </Box>
      <Footer></Footer>
    </Stack>
  );
};

export default ActivePortal;
