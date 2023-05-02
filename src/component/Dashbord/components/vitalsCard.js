import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardContent, 
  Grid, 
  Typography, 
  Avatar 
} from '@material-ui/core';
import { 
  Favorite as FavoriteIcon, 
  Visibility as VisibilityIcon,
  Opacity as OpacityIcon,
  LocalHospital as LocalHospitalIcon
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#F9FAFB',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: '#F0F2F5'
    }
  },
  avatar: {
    backgroundColor: '#E5E7EB',
    color: '#4B5563'
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(1)
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 14
  }
}));

const PatientVitals = () => {
  const classes = useStyles();

  const vitals = [
    {
      id: 1,
      title: 'Heart Rate',
      value: '75',
      icon: <FavoriteIcon className={classes.icon} />,
      unit: 'bpm'
    },
    {
      id: 2,
      title: 'Blood Pressure',
      value: '120/80',
      icon: <VisibilityIcon className={classes.icon} />,
      unit: 'mmHg'
    },
    {
      id: 3,
      title: 'Oxygen Saturation',
      value: '98',
      icon: <OpacityIcon className={classes.icon} />,
      unit: '%'
    },
    {
      id: 4,
      title: 'Temperature',
      value: '36.5',
      icon: <LocalHospitalIcon className={classes.icon} />,
      unit: '°C'
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {vitals.map((vital) => (
          <Grid item xs={12} sm={6} md={3} key={vital.id}>
            <Card className={classes.card}>
              <Avatar className={classes.avatar}>
                {vital.icon}
              </Avatar>
              <CardContent>
                <Typography className={classes.title}>
                  {vital.title}
                </Typography>
                <Typography variant="h4">
                  {vital.value}
                  <Typography variant="subtitle1" className={classes.subtitle}>
                    {vital.unit}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PatientVitals;
