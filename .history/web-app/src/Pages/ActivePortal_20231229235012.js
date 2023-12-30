import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'; // Import AuthContext
import { Box, Stack, Typography, Button } from '@mui/material';
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar/Sidebar";

const ActivePortal = () => {
  const { setAuthenticated } = useContext(AuthContext); // Use AuthContext for authentication state
  const navigate = useNavigate(); // For redirection after logout
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
          setIsOpen(!isOpen)
      }
  const handleLogout = () => {
    setAuthenticated(false); // Update authentication state
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <Stack alignItems='center' overflow='hidden'>
    <Navbar toggle={toggle} blue={true}></Navbar>
    <SideBar  isOpen={isOpen} toggle={toggle}/>  
    <Stack sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Active Portal
        </Typography>
        {/* Insert additional portal content here */}
        
        <Button variant="contained" color="#1F282C" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default ActivePortal;
