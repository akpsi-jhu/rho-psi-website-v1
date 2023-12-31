import React, { useState, useMemo } from 'react';
import { Box, Card, CardContent, Typography, Collapse, IconButton, Grid, Paper, Autocomplete, TextField, Chip, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/MailOutline';import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import dummyData from '../dummy_data/alumni.json';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const AlumniDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [expanded, setExpanded] = useState({});

  const users = useMemo(() => {
    const currentYear = new Date().getFullYear();

    // Filter out users who haven't graduated yet and sort by graduation year descending
    return dummyData.sheets.Users.slice(1)
      .filter(user => user.graduationYear && user.graduationYear <= currentYear)
      .sort((a, b) => b.graduationYear - a.graduationYear);
  }, []); // No dependencies, useMemo runs only once when the component mounts


  const yearOptions = useMemo(() => [...new Set(users.map(user => user.graduationYear))].filter(Boolean), [users]);
  const majorOptions = useMemo(() => [...new Set(users.flatMap(user => user.majors?.split(',')))].filter(Boolean), [users]);
  const positionOptions = useMemo(() => [...new Set(users.map(user => user.position))].filter(Boolean), [users]);
  const companyOptions = useMemo(() => [...new Set(users.map(user => user.currentCompany))].filter(Boolean), [users]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleExpandClick = (index) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [index]: !prevExpanded[index]
    }));
  };

  const filteredAlumni = users.filter(alumni => {
    const matchesYear = selectedYears.length === 0 || selectedYears.includes(alumni.graduationYear);
    const matchesMajor = selectedMajors.length === 0 || selectedMajors.some(major => alumni.majors?.includes(major));
    const matchesPosition = selectedPositions.length === 0 || selectedPositions.includes(alumni.position);
    const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(alumni.currentCompany);
    const matchesSearch = searchTerm === '' || alumni.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || alumni.lastName.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesYear && matchesMajor && matchesPosition && matchesCompany && matchesSearch;
  });

  const renderAlumniDetails = (alumni) => {
    return (
      <>
        {alumni.majors && <Typography variant="body2">{`Major: ${alumni.majors}`}</Typography>}
        {alumni.phoneNumber && <Typography variant="body2">{`Phone Number: ${alumni.phoneNumber}`}</Typography>}
        {alumni.pastWork && <Typography variant="body2">{`Past Work: ${alumni.pastWork}`}</Typography>}
        {alumni.areasExpertise && <Typography variant="body2">{`Areas of Expertise: ${alumni.areasExpertise}`}</Typography>}
        {alumni.active && <Typography variant="body2">{`Active: ${alumni.active ? 'Yes' : 'No'}`}</Typography>}
        {alumni.bio && <Typography variant="body2">{`Bio: ${alumni.bio}`}</Typography>}
        {alumni.birthdate && <Typography variant="body2">{`Birthdate: ${alumni.birthdate}`}</Typography>}
        {alumni.hometown && <Typography variant="body2">{`Hometown: ${alumni.hometown}`}</Typography>}
        {alumni.jhuEmail && <Typography variant="body2">{`Johns Hopkins Email: ${alumni.jhuEmail}`}</Typography>}
        {alumni.minors && <Typography variant="body2">{`Minors: ${alumni.minors}`}</Typography>}
        {alumni.pastExec && <Typography variant="body2">{`Past Executive Roles: ${alumni.pastExec}`}</Typography>}
        {alumni.pledgeClass && <Typography variant="body2">{`Pledge Class: ${alumni.pledgeClass}`}</Typography>}
        {alumni.pronouns && <Typography variant="body2">{`Pronouns: ${alumni.pronouns}`}</Typography>}
      </>
    );
  };

  return (
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2, width: '100%'}} paddingX={{xs: 5, sm: 10, md: 20, lg: 20, xl: 20}} >
      {/* Filter Section */}
      <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 3 }}>
      <TextField
          label="Search by Name"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1, minWidth: '150px' }}  // Ensure TextField takes up available space but has a minimum width
        />
        <Autocomplete
          multiple
          sx={{ flexGrow: 2, minWidth: '150px' }}  // Ensure TextField takes up available space but has a minimum width
          options={yearOptions}
          value={selectedYears}
          onChange={(event, newValue) => setSelectedYears(newValue)}
          renderInput={(params) => <TextField {...params} label="Filter by Year" />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
          }
        />
        <Autocomplete
          multiple
          sx={{ flexGrow: 2, minWidth: '150px' }}  // Ensure TextField takes up available space but has a minimum width
          options={majorOptions}
          value={selectedMajors}
          onChange={(event, newValue) => setSelectedMajors(newValue)}
          renderInput={(params) => <TextField {...params} label="Filter by Major" />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
          }
        />
        <Autocomplete
          multiple
          sx={{ flexGrow: 2, minWidth: '150px' }}  // Ensure TextField takes up available space but has a minimum width
          options={positionOptions}
          value={selectedPositions}
          onChange={(event, newValue) => setSelectedPositions(newValue)}
          renderInput={(params) => <TextField {...params} label="Filter by Position" />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
          }
        />
        <Autocomplete
          multiple
          sx={{ flexGrow: 2, minWidth: '150px' }}  // Ensure TextField takes up available space but has a minimum width
          options={companyOptions}
          value={selectedCompanies}
          onChange={(event, newValue) => setSelectedCompanies(newValue)}
          renderInput={(params) => <TextField {...params} label="Filter by Company" />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
          }
        />
      </Paper>

      <Grid container spacing={2}>
        {filteredAlumni.map((alumni, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={0} sx={{ backgroundColor: '#F2F5F9', borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6">
                  {`${alumni.firstName} ${alumni.lastName}`}
                  {alumni.personalEmail && (
                    <Link href={`mailto:${alumni.personalEmail}`} color="primary" sx={{ ml: 1 }}>
                      <EmailIcon sx={{ color: '#0C406F' }} />
                    </Link>
                  )}
                  {alumni.linkedinUrl && (
                    <Link href={alumni.linkedinUrl} color="primary" target="_blank" sx={{ ml: 1 }}>
                      <LinkedInIcon sx={{ color: '#0e76a8' }} />
                    </Link>
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary">{alumni.graduationYear && `Graduation Year: ${alumni.graduationYear}`}</Typography>
                <Typography variant="body2" color="text.secondary">{alumni.position && `Position: ${alumni.position}`}</Typography>
                <Typography variant="body2" color="text.secondary">{alumni.currentCompany && `Company: ${alumni.currentCompany}`}</Typography>
                <ExpandMore expand={expanded[index]} onClick={() => handleExpandClick(index)} aria-expanded={expanded[index]} aria-label="show more">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardContent>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>{renderAlumniDetails(alumni)}</CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlumniDatabase;
