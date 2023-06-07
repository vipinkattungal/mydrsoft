import React, { useState } from 'react';
import {
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
      handleClose(); // Close the modal after adding the note
    }
  };
  


  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>
        Add Note
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            boxShadow: 24,
            p: 2,
            outline: 'none',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Add Patient Note
          </Typography>
          <TextField
            multiline
            rows={4}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter note"
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={handleAddNote}
            sx={{ marginTop: '16px' }}
          >
            Add
          </Button>
        </Box>
      </Modal>

      {notes.map((note, index) => (
        <Paper
          key={index}
          sx={{
            padding: '16px',
            marginTop: '16px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ flex: 1 }}>
            {note}
          </Typography>
          <IconButton
            onClick={() => handleDeleteNote(index)}
            sx={{ position: 'absolute', right: '8px' }}
          >
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}
    </div>
  );
};

export default Notes;
