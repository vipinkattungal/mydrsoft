import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios"
const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  searchInput: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    height: '100%',
  },
  searchResults: {
    marginTop: theme.spacing(2),
    fontStyle: 'italic',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform the API call with headers here
    axios
      .get('https://medicine-name-and-details.p.rapidapi.com/', {
        headers: {
            'X-RapidAPI-Key': '293d52e098msh78cfee8285bbfe5p13f37ejsn3720f3b85788',
            'X-RapidAPI-Host': 'medicine-name-and-details.p.rapidapi.com'
          },
        params: {
          query: searchQuery,
        },
      })
      .then((response) => {
        // Process the response and update search results
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }

  return (
    <div>
      <div className={classes.searchBar}>
        <TextField
          label="Search"
          variant="outlined"
          className={classes.searchInput}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.searchButton}
          onClick={handleSearchSubmit}
        >
          Search
        </Button>
      </div>
      {searchResults.length > 0 && (
        <div className={classes.searchResults}>
          <strong>Search Results:</strong>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
