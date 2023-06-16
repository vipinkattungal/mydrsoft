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
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const LabTestReportModal = ({ initialTestInputs }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [testInputs, setTestInputs] = useState(initialTestInputs);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddInput = () => {
    setTestInputs([...testInputs, { test: '', value: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedInputs = [...testInputs];
    updatedInputs[index][field] = value;
    setTestInputs(updatedInputs);
  };

  const handleSave = () => {
    // Handle saving the information
    console.log('Saved test:', testInputs);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
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
                value={input.test}
                onChange={(e) => handleInputChange(index, 'test', e.target.value)}
                fullWidth
              />
              <TextField
                label={`Value ${index + 1}`}
                value={input.value}
                onChange={(e) => handleInputChange(index, 'value', e.target.value)}
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

export default LabTestReportModal;
