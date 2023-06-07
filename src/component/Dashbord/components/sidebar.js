import React, { useState, useEffect } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: '300px',
  },
  searchContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    flex: 1,
  },
  resultContainer: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
  },
  newsContainer: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
  },
}));

const DoctorSidebarModal = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Call medicine search API
    // Replace the placeholder API URL with your actual API endpoint
    fetch(`https://api.example.com/medicine-search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  useEffect(() => {
    // Call latest news API
    // Replace the placeholder API URL with your actual API endpoint
    fetch('https://api.example.com/latest-news')
      .then((response) => response.json())
      .then((data) => setLatestNews(data.news))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Drawer open={true} variant="persistent" className={classes.drawer} anchor="left">
        <div className={classes.searchContainer}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <TextField
            className={classes.searchInput}
            variant="outlined"
            placeholder="Search for a medicine"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={classes.resultContainer}>
          <Typography variant="h6">Search Results</Typography>
          <List>
            {searchResults.map((result) => (
              <ListItem key={result.id}>
                <ListItemIcon>
                  <img src={result.image} alt={result.name} />
                </ListItemIcon>
                <ListItemText primary={result.name} secondary={result.description} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.newsContainer}>
          <Typography variant="h6">Latest News</Typography>
          <List>
            {latestNews.map((news) => (
              <ListItem key={news.id}>
                <ListItemText primary={news.title} secondary={news.date} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DoctorSidebarModal;
