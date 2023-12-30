import React, { useState } from 'react';
// import { firebaseDb } from './firebase-config'; // Import your firebase configuration
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ActivePortalLogin = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fixedPassword = 'yourFixedPassword'; // Replace with your fixed password

//   const handleLogin = async () => {
//     try {
//       const snapshot = await firebaseDb.ref('authorizedEmails').child(email.replace('.', ',')).once('value');
//       if (snapshot.exists() && password === fixedPassword) {
//         setAuth(true);
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login to Active Portal
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
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
