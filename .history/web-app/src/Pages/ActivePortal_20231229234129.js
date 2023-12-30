import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { Box, Container, Typography, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Assuming you have a function to fetch alumni data
// import { fetchAlumniData } from '../services/alumniService';

const ActivePortal = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await fetchAlumniData();
        // setAlumniData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
        setLoading(false);
        // Handle error appropriately
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Active Portal
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="alumni table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Year Graduated</TableCell>
                  {/* Add more table headers if needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {alumniData.map((alumni) => (
                  <TableRow key={alumni.id}>
                    <TableCell component="th" scope="row">
                      {alumni.name}
                    </TableCell>
                    <TableCell align="right">{alumni.year}</TableCell>
                    {/* Add more cells if needed */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default ActivePortal;
