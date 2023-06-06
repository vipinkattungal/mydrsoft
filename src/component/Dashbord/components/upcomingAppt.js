import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UpcomingAppointments = ({ appointments }) => {
  const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

  const handleNextAppointment = () => {
    setCurrentAppointmentIndex((prevIndex) =>
      prevIndex < appointments.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentAppointment = appointments[currentAppointmentIndex];

  return (
    <Card variant="outlined" sx={{ backgroundColor: 'blue', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>
          {currentAppointment.name}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>
          {currentAppointment.time}
        </Typography>
        <IconButton color="inherit" onClick={handleNextAppointment}>
          <CloseIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
