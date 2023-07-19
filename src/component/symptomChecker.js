import React, { useState } from 'react';
import { TextField, Button, Paper, makeStyles, Typography, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    maxWidth: 800,
    margin: '0 auto',
    marginTop: theme.spacing(5),
    borderRadius: theme.spacing(2),
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    height: '600px', // Adjust the fixed height as needed
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    padding: theme.spacing(2),
    overflowY: 'auto', // Allow the content section to be scrollable
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(2),
  },
  searchButton: {
    marginLeft: theme.spacing(1),
  },
  chatBubble: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: '#f0f0f0',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  preloader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px', // Adjust the height as needed
  },
  circularProgress: {
    margin: theme.spacing(2),
  },
}));

const SymptomCheckComponent = () => {
  const classes = useStyles();
  const [symptoms, setSymptoms] = useState('');
  const [chatResponses, setChatResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a medical expert. Please provide advice based on the symptoms.' },
            { role: 'user', content: symptoms },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
          },
        }
      )
      .then((response) => {
        const assistantReply = response.data.choices[0].message.content;
        setChatResponses([...chatResponses, { role: 'assistant', content: assistantReply }]);
      })
      .catch((error) => {
        console.error('Error fetching chat responses:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h4" className={classes.heading}>
        Symptom Check
      </Typography>
        <div className={classes.searchBar}>
          <TextField
            value={symptoms}
            onChange={handleInputChange}
            label="Enter your symptoms..."
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSearch} className={classes.searchButton}>
            <SearchIcon />
          </Button>
        </div>
        {loading ? (
          <div className={classes.preloader}>
            <CircularProgress className={classes.circularProgress} />
          </div>
        ) : (
          chatResponses.map((message, index) => (
            <div key={index} className={classes.chatBubble}>
              {message.role === 'system' && (
                <Typography variant="body1" style={{ fontStyle: 'italic' }}>
                  {message.content}
                </Typography>
              )}
              {message.role === 'user' && <Typography variant="body1">{message.content}</Typography>}
              {message.role === 'assistant' && <Typography variant="body1">{message.content}</Typography>}
            </div>
          ))
        )}
      </div>
    </Paper>
  );
};

export default SymptomCheckComponent;
