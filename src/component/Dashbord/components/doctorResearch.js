import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Card, CardContent } from '@mui/material';
import axios from "axios"
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
    width: '1000px', // Increase the width of the search bar
  },
  searchResponse: {
    fontStyle: 'italic', // Apply italic style to search response
    fontWeight: 'bold', // Apply bold style to search response
  },
  newsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '24px',
  },
  newsSeparator: {
    borderTop: `1px solid ${theme.palette.grey[300]}`, // Add separator line
    margin: '24px 0',
  },
}));

function DoctorResearchPage() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [newsData, setNewsData] = useState([]);

  // Fetch search results from API
  useEffect(() => {
    fetch(`https://api.fda.gov/drug/label.json?search=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.map((result) => ({
          id: result.id,
          name: result.openfda.brand_name[0],
          description: result.description,
        }));
        setSearchResult(results);
      })
      .catch((error) => console.error(error));
  }, [searchValue]);

  // Fetch medical news from API
  useEffect(() => {
    fetchMedicalNews();
  }, []);

  const fetchMedicalNews = async () => {
    try {
      const response = await axios.get(
        'https://medlineplus.gov/api/news/news?max=5'
      );
      const data = response.data;
      console.log(data,"data");
      const articles = data.feed.entry.map((entry) => ({
        id: entry.id,
        title: entry.title,
        summary: entry.summary,
        datePublished: entry.updated,
      }));
      setNewsData(articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.container}>
              <Typography variant="h5" gutterBottom>
         <u><strong><i>Research</i></strong> </u> 
        </Typography>
      <section className={classes.searchSection}>
        <TextField
          label="Search Medicine"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          {searchResult.map((result) => (
            <Typography
              key={result.id}
              variant="body1"
              className={classes.searchResponse}
            >
              {result.name} - {result.description}
            </Typography>
          ))}
        </div>
      </section>
      <section>
        <Typography variant="h5" gutterBottom>
         <u><strong><i>Medical News and Updates</i></strong> </u> 
        </Typography>
        <div className={classes.newsSection}>
          {newsData.map((news) => (
           <Card key={news.id}>
           <CardContent>
             <Typography variant="subtitle1">{news.title}</Typography>
             <Typography variant="body2">{news.summary}</Typography>
             <Typography variant="caption">{news.datePublished}</Typography>
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
