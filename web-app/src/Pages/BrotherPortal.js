import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { Box, Stack, Typography, Button } from '@mui/material';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar/Sidebar";
import AlumniDatabase from '../Components/AlumniDatabase';

const BrotherPortal = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <Stack alignItems='center' sx={{ minHeight: '100vh', justifyContent: 'space-between' }}>
      <Navbar toggle={toggle} blue={true}></Navbar>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Box maxWidth={1920} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 8, marginTop: 20, marginBottom: 20 }}>
        <Typography variant="h4" component="h1" gutterBottom> 
          Alumni Directory
        </Typography>
        <Stack direction={'row'} gap={2}>
        <Button variant="outlined" href="https://forms.gle/wAHkJjDqpEvLKBNz6" target='blank' sx={{ mt: 2, mb: 2, color: "#0C406F", borderColor: "#0C406F" }}>
              Resume Review Form
            </Button>
            <Button variant="outlined" href="https://forms.gle/kHQbinXL6DKGDUjg6" target='blank' sx={{ mt: 2, mb: 2, color: "#0C406F", borderColor: "#0C406F" }}>
              Feedback Form
            </Button>
            <Button variant="outlined"  onClick={handleLogout} sx={{ mt: 2, mb: 2, color: "#0C406F", borderColor: "#0C406F" }}>
              Logout
            </Button>
        </Stack>
        <AlumniDatabase></AlumniDatabase>
      </Box>
      <Footer></Footer>
    </Stack>
  );
};

export default BrotherPortal;
