import React, { useState } from 'react';
import { TextField, Typography, Card, CardContent, Tab, Tabs, Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchContainer: {
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: theme.shape.borderRadius,
    background: '#F5F5F5',
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: '600px',
  },
  tabsContainer: {
    width: '100%',
    maxWidth: '600px',
    background: '#F5F5F5',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  noResultsText: {
    marginTop: theme.spacing(2),
  },
}));

const MedicineSearch = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTab, setSelectedTab] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchMedicine(value);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const searchMedicine = (term) => {
    if (term.trim() !== '') {
      setIsLoading(true);
      axios
        .get(`https://api.fda.gov/drug/label.json?search=${term}`)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  };

  const renderFields = (result) => {
    return (
      <Box mt={2}>
        {Object.entries(result).map(([fieldName, fieldValue]) => (
          <Card key={fieldName} variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="subtitle1">
                <strong>{fieldName}</strong>
              </Typography>
              <Typography variant="body1">
          
                  <span style={{ fontStyle: 'italic',fontSize:'14px' }}>
                    {fieldValue}
                  </span>
                
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };
  

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <TextField
          label="Search Medicine"
          variant="outlined"
          className={classes.searchInput}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {isLoading ? (
        <div className={classes.loadingContainer}>
          <CircularProgress />
        </div>
      ) : searchResults.length > 0 ? (
        <div className={classes.contentContainer}>
          <div className={classes.tabsContainer}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {Object.keys(searchResults[0]).map((fieldName, index) => (
                <Tab key={index} label={fieldName} value={fieldName} />
              ))}
            </Tabs>
          </div>
          <div>
            {selectedTab !== '' && (
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  {renderFields(searchResults[0][selectedTab])}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      ) : (
        <Typography className={classes.noResultsText}>No results found.</Typography>
      )}
    </div>
  );
};

export default MedicineSearch;
