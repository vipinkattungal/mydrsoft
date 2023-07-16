import React, { useState, useEffect } from 'react';
import { Typography, Button, makeStyles } from '@mui/material';
import DailyIframe from '@daily-co/daily-js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
}));

const VideoAppointment = () => {
  const classes = useStyles();
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [callDuration, setCallDuration] = useState(0);
  let callFrame;

  useEffect(() => {
    // Initialize the Daily.co iframe
    callFrame = DailyIframe.wrap(document.getElementById('daily-iframe'));
  }, []);

  const handleStartVideoCall = async () => {
    // Start the video call using the Daily.co API
    const callUrl = await createVideoCall();

    // Open the call frame and join the video call
    callFrame.join({ url: callUrl });

    // Set the video call as active
    setIsVideoCallActive(true);
  };

  const createVideoCall = async () => {
    // Make an API request to create a video call using the Daily.co API
    // You'll need to sign up for a free API key at https://dashboard.daily.co/
    // Implement the necessary logic to create a video call and get the call URL
    const apiKey = 'YOUR_DAILY_CO_API_KEY';
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    const callUrl = data.url;

    return callUrl;
  };

  const handleEndVideoCall = async () => {
    // End the video call
    callFrame.leave();

    // Set the video call as inactive
    setIsVideoCallActive(false);

    // Simulate the end of the call after 5 seconds
    setTimeout(() => {
      setPatientName('John Doe'); // Set the patient's name
      setCallDuration(300); // Set the call duration in seconds
    }, 5000);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Video Appointment
      </Typography>
      {!isVideoCallActive ? (
        <Button variant="contained" color="primary" onClick={handleStartVideoCall}>
          Start Video Call
        </Button>
      ) : (
        <div>
          <div id="daily-iframe" style={{ width: '800px', height: '500px', marginTop: '20px' }} />
          <Button variant="contained" color="secondary" onClick={handleEndVideoCall}>
            End Video Call
          </Button>
        </div>
      )}
      {patientName && callDuration > 0 && (
        <Typography variant="body1" gutterBottom>
          Call ended. Patient: {patientName}, Duration: {callDuration} seconds
        </Typography>
      )}
    </div>
  );
};

export default VideoAppointment;
