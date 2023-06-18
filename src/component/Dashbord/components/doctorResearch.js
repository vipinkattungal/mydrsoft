import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow border
  },
  searchSection: {
    marginBottom: '24px',
    width: '600px', // Adjust the width of the search bar
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '24px',
    },
  },
  searchResult: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultCard: {
    width: '100%',
    marginBottom: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    transition: 'background-color 0.3s',
  },
  resultCardContent: {
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  resultName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  resultDescription: {
    marginTop: '8px',
    color: theme.palette.text.secondary,
  },
  noResult: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.error.main,
  },
}));

function DoctorResearchPage() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState('');

  // Fetch search results from API
  useEffect(() => {
    if (searchValue.trim() === '') {
      setSearchResult([]);
      return;
    }

    axios
      .get(`https://api.fda.gov/drug/label.json?search=${searchValue}`)
      .then((response) => {
        const results = response.data.results.map((result) => ({
          id: result.id,
          name: result.openfda?.brand_name?.[0] || 'N/A',
          description: result.description || 'N/A',
          indications: result.indications_and_usage || 'N/A',
          contraindications: result.contraindications || 'N/A',
          warnings: result.warnings || 'N/A',
        }));
        setSearchResult(results);
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred while fetching the medicine data.');
      });
  }, [searchValue]);

  // Fetch medical news from API
  useEffect(() => {
    fetchIndianMedicalNews();
  }, []);

  const fetchIndianMedicalNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines',
        {
          params: {
            country: 'in',
            category: 'health',
            apiKey: 'e2bbfbe40ba24a378f451469da87af53',
          },
        }
      );
      const articles = response.data.articles.map((article) => ({
        id: article.source.id,
        title: article.title,
        description: article.description,
        url: article.url,
      }));
      setNewsData(articles);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom  style={{borderBottom: '2px solid black'}}>
        <strong>Research And Updates</strong>
      </Typography>
      <br/>
      <Typography variant="h6" gutterBottom style={{ color: 'blue' }} >
          <u><strong><i>Search Medicine</i></strong></u>
        </Typography>
      <section className={classes.searchSection}>
        <TextField
          label="Search Medicine"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={classes.searchField}
        />
        <div className={classes.searchResult}>
          {searchResult.length === 0 && !error && (
            <Typography variant="body1" className={classes.noResult}>
              Result not found.
            </Typography>
          )}
          {searchResult.map((result) => (
            <Card key={result.id} className={classes.resultCard}>
              <CardContent className={classes.resultCardContent}>
                <Typography variant="subtitle1" className={classes.resultName}>
                  {result.name}
                </Typography>
                <Typography variant="body2" className={classes.resultDescription}>
                  Description: {result.description}
                </Typography>
                <Typography variant="body2" className={classes.resultDescription}>
                  Indications: {result.indications}
                </Typography>
                <Typography variant="body2" className={classes.resultDescription}>
                  Contraindications: {result.contraindications}
                </Typography>
                <Typography variant="body2" className={classes.resultDescription}>
                  Warnings: {result.warnings}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        {error && <Typography variant="body1" color="error">{error}</Typography>}
      </section>
      <section>
      <Typography variant="h6" gutterBottom style={{ color: 'blue' }}>
          <u><strong><i>Medical News and Updates</i></strong></u>
        </Typography>
        <div className={classes.newsSection}>
          {newsData.map((news) => (
            <Card key={news.id} className={classes.newsCard}>
              <CardContent className={classes.newsCardContent}>
                <Typography variant="subtitle1"><strong>{news.title}</strong></Typography>
                <Typography variant="body2">{news.description}</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="caption">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className={classes.newsSeparator} /> {/* Add separator line */}
    </div>
  );
}

export default DoctorResearchPage;
