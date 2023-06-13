import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const theme = createTheme();

const AddPatientVitals = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [respiration, setRespiration] = useState('');
  const [oxygenLevel, setOxygenLevel] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [pulse, setPulse] = useState('');
  const [redBloodCellCount, setRedBloodCellCount] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleCaptureImage = async () => {
    try {
      const mediaDevices = navigator.mediaDevices;
      const stream = await mediaDevices.getUserMedia({ video: true });
      const mediaStreamTrack = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(mediaStreamTrack);
      const photoBlob = await imageCapture.takePhoto();
      setAttachment(photoBlob);
      setPreviewUrl(URL.createObjectURL(photoBlob));
      setShowCamera(false);
      mediaStreamTrack.stop();
    } catch (error) {
      console.log(error); // Handle the error
    }
  };
  const handleDragDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setAttachment(file);
  };
  
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('bloodPressure', bloodPressure);
      formData.append('respiration', respiration);
      formData.append('oxygenLevel', oxygenLevel);
      formData.append('heartRate', heartRate);
      formData.append('pulse', pulse);
      formData.append('redBloodCellCount', redBloodCellCount);
      formData.append('attachment', attachment);

      const response = await axios.post(
        'https://example.com/submit-vitals',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);

      // Clear the form after successful submission
      setBloodPressure('');
      setRespiration('');
      setOxygenLevel('');
      setHeartRate('');
      setPulse('');
      setRedBloodCellCount('');
      setAttachment(null);
      setPreviewUrl(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper component={Box} p={4} mt={4} sx={{ maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h5" mb={3} textAlign="center">
          Add Patient Vitals
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Blood Pressure</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Respiration</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={respiration}
              onChange={(e) => setRespiration(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Oxygen Level</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={oxygenLevel}
              onChange={(e) => setOxygenLevel(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Heart Rate</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Pulse</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Red Blood Cell Count</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={redBloodCellCount}
              onChange={(e) => setRedBloodCellCount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {showCamera ? (
              <Box position="relative">
                <video
                  ref={videoRef}
                  style={{ width: '100%', height: 'auto' }}
                  autoPlay
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor="rgba(0, 0, 0, 0.5)"
                >
                  <IconButton
                    color="primary"
                    aria-label="Take a Picture"
                    onClick={handleCaptureImage}
                  >
                    <CameraAltIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box
                border="2px dashed #ccc"
                borderRadius="4px"
                p={2}
                mt={1}
                textAlign="center"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDragDrop}
              >
                {attachment ? (
                  <Typography variant="body1">{attachment.name}</Typography>
                ) : (
                  <Typography variant="body1">
                    Drag and drop or click to upload a file
                  </Typography>
                )}
                <input
                  type="file"
                  accept="image/*, .pdf, .doc, .docx"
                  style={{ display: 'none' }}
                  onChange={handleAttachmentChange}
                />
                <IconButton
                  color="primary"
                  aria-label="Take a Picture"
                  onClick={() => setShowCamera(true)}
                >
                  <CameraAltIcon fontSize="large" />
                </IconButton>
              </Box>
            )}
          </Grid>
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

export default AddPatientVitals;
