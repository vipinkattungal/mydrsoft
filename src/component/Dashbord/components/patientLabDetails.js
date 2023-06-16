import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[24],
    padding: theme.spacing(4),
    borderRadius: 4,
  },
  inputContainer: {
    marginBottom: theme.spacing(2),
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const LabTestModal = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [testInputs, setTestInputs] = useState(['']);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddInput = () => {
    setTestInputs([...testInputs, '']);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...testInputs];
    updatedInputs[index] = value;
    setTestInputs(updatedInputs);
  };

  const handleSendToLab = () => {
    console.log('Sending test to lab:', testInputs);
    // Make axios call here to send data to the lab
    axios.post('/send-to-lab', { testInputs })
      .then((response) => {
        console.log('Lab test sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending lab test:', error);
      });
  };

  const handleSave = () => {
    console.log('Saving test:', testInputs);
    // Make axios call here to save the data
    axios.post('/save-test', { testInputs })
      .then((response) => {
        console.log('Lab test saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error saving lab test:', error);
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<OpenInNewIcon />}
        onClick={handleOpen}
      >
        <strong>Add lab test</strong>
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Box className={classes.modalContainer}>
          <Typography variant="h6" gutterBottom>
            Patient Lab Test
          </Typography>
          {testInputs.map((input, index) => (
            <Box key={index} className={classes.inputContainer}>
              <TextField
                label={`Test ${index + 1}`}
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                fullWidth
              />
            </Box>
          ))}
          <IconButton
            color="primary"
            aria-label="add"
            onClick={handleAddInput}
            className={classes.addButton}
          >
            <AddIcon />
          </IconButton>
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendToLab}
              className={classes.button}
            >
              Send to Lab
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              className={classes.button}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default LabTestModal;
