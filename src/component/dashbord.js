import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Total Patients
                  </Typography>
                  <Typography variant="h3" component="p">
                    500
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Total Earnings
                  </Typography>
                  <Typography variant="h3" component="p">
                    $10,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
