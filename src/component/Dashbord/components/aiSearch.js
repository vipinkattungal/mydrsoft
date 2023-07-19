import React, { useState } from 'react';
import { TextField, Button, Paper, makeStyles, Typography, FormControlLabel, Checkbox, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import ailogo from '../../../assets/images/ailogo.png'
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
  filterBar: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    borderRight: '1px solid #e0e0e0',
    overflowY: 'auto',
    maxHeight: '100%',
    flex: '0 0 200px', // Fixed width for filter bar
    background: '#f7f7f7',
  },
  circularProgress: {
    margin: theme.spacing(2),
  },
  clearButton: {
    marginTop: theme.spacing(2),
  },
  results: {
    flex: '1 1 auto',
    padding: theme.spacing(2),
    overflowY: 'auto', // Allow the result section to be scrollable
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
  logo: {
    height: 30,
    marginRight: theme.spacing(1),
  },
  searchButton: {
    marginLeft: theme.spacing(1),
  },
  checkbox: {
    marginBottom: theme.spacing(1),
  },
  italicText: {
    fontStyle: 'italic',
  },
  highlightedResult: {
    backgroundColor: '#e5e5e5', // Custom background color for highlighted result
  },
  highlightButton: {
    marginTop: theme.spacing(2),
  },
}));

const SearchComponent = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [checkedFilters, setCheckedFilters] = useState({
    cardiology: false,
    neurology: false,
    oncology: false,
    // Add more filters here...
  });
  const [loading, setLoading] = useState(false); // New state for the preloader

  const [highlightedResult, setHighlightedResult] = useState(null); // Define highlightedResult state

  const [chatResponses, setChatResponses] = useState({});
  const handleClearConversation = () => {
    setChatResponses({});
    setHighlightedResult(null);
  };
  const filterOptions = [
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Neurology', value: 'neurology' },
    { label: 'Oncology', value: 'oncology' },
    // Add more filters here...
  ];
  const handleHighlightResult = (index) => {
    setHighlightedResult(index === highlightedResult ? null : index);
  };  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckedFilters({ ...checkedFilters, [event.target.name]: event.target.checked });
  };

  const handleSearch = () => {
    setLoading(true); // Set loading to true while waiting for the API response

    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a medical expert. Please provide answers related to medical fields only.' },
            { role: 'user', content: query },
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
        const selectedFilters = Object.keys(checkedFilters).filter((filter) => checkedFilters[filter]);
        setChatResponses((prevResponses) => ({
          ...prevResponses,
          [query]: { filters: selectedFilters, response: assistantReply },
        }));
      })
      .catch((error) => {
        console.error('Error fetching chat responses:', error);
      }).finally(() => {
        setLoading(false); // Set loading back to false after the API call is complete
      });
  };

  return (
    <Paper className={classes.root}>
      
      <div className={classes.filterBar}>
        
        <Typography variant="h6">Filters:</Typography>
        {filterOptions.map((filter) => (
          <FormControlLabel
            key={filter.value}
            control={
              <Checkbox
                checked={checkedFilters[filter.value]}
                onChange={handleCheckboxChange}
                name={filter.value}
              />
            }
            label={filter.label}
            className={classes.checkbox}
          />
        ))}
       
      </div>
      <div className={classes.results}>
        <div className={classes.searchBar}>
          <img src={ailogo} alt="Logo" className={classes.logo} />
          <TextField
            value={query}
            onChange={handleInputChange}
            label="Search any medical topics.."
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSearch} className={classes.searchButton}>
            <SearchIcon />
          </Button>
        </div>
        {loading &&// Display preloader while loading is true
          <div className={classes.preloader}>
            <CircularProgress className={classes.circularProgress} />
            <Typography variant="body1">Loading...</Typography>
          </div>
} 
        {Object.keys(chatResponses).map((searchQuery, index) => (
          <div key={index} className={highlightedResult === index ? classes.highlightedResult : null}>
            <Typography variant="h6">Results For: {searchQuery}</Typography>
            {chatResponses[searchQuery].filters.length > 0 && (
              <Typography variant="body1">
                Filters: {chatResponses[searchQuery].filters.join(', ')}
              </Typography>
            )}
            <Typography variant="body1" className={classes.italicText}>
              {chatResponses[searchQuery].response}
            </Typography>
            <Button variant="outlined" color="primary" className={classes.highlightButton} onClick={() => handleHighlightResult(index)}>
              {highlightedResult === index ? 'Copied!' : 'Copy'}
            </Button>
            <Button variant="outlined" color="secondary" className={classes.clearButton} onClick={handleClearConversation}>
          Clear Conversation
        </Button> 
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default SearchComponent;
