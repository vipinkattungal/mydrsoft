import React, { useState } from 'react';
import { useSelector,useDispatch} from'react-redux'
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
import { increment, decrement, selectCount } from '../../../app/counterSlice';
import { addNote, deleteNote } from '../../../app/NoteReducer';

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [incrementAmount, setIncrementAmount] = useState('2');
  const note = useSelector((state)=>state.notes.value);
  const noteLength = useSelector((state)=>state.notes.value);

const stateVrble = useSelector((state)=>state)
localStorage.setItem("store",stateVrble)
console.log(stateVrble);
const dispatch =useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNote = () => {
    dispatch(addNote({id:[(noteLength.length <= 0)? 0:noteLength.length-1]+1,notes:newNote}))
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
      handleClose(); // Close the modal after adding the note
    }
  };
  


  const handleDeleteNote = (id) => {
    dispatch(deleteNote({id:id}))
    const updatedNotes = [...notes];
    updatedNotes.splice(id, 1);
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
{console.log(note)}
      {note?.map((notes, id) => (
        <Paper
          key={id}
          sx={{
            padding: '16px',
            marginTop: '16px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ flex: 1 }}>
            {notes.notes}
          </Typography>
          <IconButton
            onClick={() => handleDeleteNote(notes.id)}
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
