import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, Input, Paper, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import LabTestModal from './Dashbord/components/patientLabDetails'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxShadow: '0px 3px 5px 2px rgba(0,0,0,0.3)',
    borderRadius: theme.spacing(1),
    backgroundColor: '#ffffff',
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  uploadBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    border: `2px dashed ${theme.palette.grey[400]}`,
    borderRadius: theme.spacing(1),
    width: '100%',
    height: theme.spacing(20),
    cursor: 'pointer',
  },
  icon: {
    fontSize: theme.spacing(6),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    buttonmodal: {
      position: 'relative',
    },
    modalContent: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
}));

const AddDoctorPrescription = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [cookie] = useCookies(['jwt']);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    formData.append('patientId', '082');

    formData.append('description', description);
    formData.append('disease', 'test');
    formData.append('numberOfVisit', '1');

    formData.append('nextConsultationDate', null);

    try {
      const response = await axios.post('https://clinic-cz9h.onrender.com/patients/addconsultation', formData, {
        headers: {
         'Content-Type': 'multipart/form-data',
         'Authorization': `${cookie.jwt}`,
        },
      });

      console.log(response.data);
      // Do something with the response
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.heading}>
        Prescription
      </Typography>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="description">Please Enter Prescription</InputLabel>
        <Input
          id="description"
          multiline
          rows={8}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <div
        className={classes.uploadBox}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <CloudUploadIcon className={classes.icon} />
        <Typography variant="body1" align="center">
          Drag and drop a file here, or click to select a file.
        </Typography>
        <input
          id="fileInput"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />
      </div>
      <br></br>
      <div className="ml-5">
      < LabTestModal />

      </div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default AddDoctorPrescription;
