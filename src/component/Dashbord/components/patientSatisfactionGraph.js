import React from 'react';
import { Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  chartContainer: {
    width: '100%',
    height: 300,
  },
}));

const PatientSatisfactionGraph = () => {
  const classes = useStyles();

  // Sample data
  const data = [
    { category: 'Curable Disease', rating: 4.5 },
    { category: 'Medicine Effectiveness', rating: 3.8 },
    { category: 'Clinic Feedback', rating: 4.2 },
    { category: 'Service Feedback', rating: 4.7 },
  ];

  // Array of colors for each bar
  const barColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

  return (
    <Box className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Patient Satisfaction Graph
      </Typography>
      <Box className={classes.chartContainer}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            {data.map((entry, index) => (
              <Bar key={entry.category} dataKey="rating" fill={barColors[index % barColors.length]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PatientSatisfactionGraph;
