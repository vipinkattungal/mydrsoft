import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Rating,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

const PatientSatisfactionForm = () => {
  const [date, setDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [clinicSatisfaction, setClinicSatisfaction] = useState(0);
  const [medicineCurability, setMedicineCurability] = useState(0);
  const [service, setService] = useState(0);
  const [doctor, setDoctor] = useState(0);
  // Add more rating state variables for other categories

  const handleSubmit = async () => {
    try {
      const feedbackData = {
        date,
        doctorName,
        clinicSatisfaction,
        medicineCurability,
        service,
        doctor,
        // Add more feedback properties based on the categories
      };

      // Make API call to submit the feedback data
      const response = await axios.post(
        'https://example.com/submit-feedback',
        feedbackData
      );

      console.log(response.data); // Handle the response as needed

      // Clear the form after successful submission
      setDate('');
      setDoctorName('');
      setClinicSatisfaction(0);
      setMedicineCurability(0);
      setService(0);
      setDoctor(0);
      // Reset other rating state variables
    } catch (error) {
      console.log(error); // Handle the error
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper component={Box} p={4} mt={4} sx={{ maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h5" mb={3} textAlign="center">
          Patient Satisfaction Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Last Visited Date</Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Doctor Name</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Clinic Satisfaction</Typography>
            <Rating
              name="clinic-satisfaction"
              value={clinicSatisfaction}
              onChange={(e, newValue) => setClinicSatisfaction(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Medicine Curability</Typography>
            <Rating
              name="medicine-curability"
              value={medicineCurability}
              onChange={(e, newValue) => setMedicineCurability(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Service</Typography>
            <Rating
              name="service"
              value={service}
              onChange={(e, newValue) => setService(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Doctor</Typography>
            <Rating
              name="doctor"
              value={doctor}
              onChange={(e, newValue) => setDoctor(newValue)}
            />
          </Grid>
          {/* Add more Grid items for other rating categories */}
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default PatientSatisfactionForm;
