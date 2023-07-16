import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const EndlessMedicalComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://api.endlessmedical.com/v1';
  const API_KEY = '293d52e098msh78cfee8285bbfe5p13f37ejsn3720f3b85788'; // Replace with your EndlessMedical API key

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  
  const handleButtonClick = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/search?q=${query}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
      });

      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        EndlessMedical API Integration
      </Typography>
      <TextField
        label="Enter your query"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Search
      </Button>
      {loading ? (
        <Typography variant="body1">Loading results...</Typography>
      ) : results ? (
        <div className="results-container">
          <Typography variant="h5" gutterBottom>
            Results:
          </Typography>
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.id} className="result-item">
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default EndlessMedicalComponent;
