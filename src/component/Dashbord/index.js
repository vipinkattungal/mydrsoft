import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
 import Calendar from "./Calender";
import LineChart from "./components/LineChart";
import PatientTable from "./components/PatientTable";
import Note from "./components/Note";
import PieChart from "./components/PieChart"
import Cards from "./card"
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "./charts";
import Barchart from './components/gaugeChart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  },
  blue: {
    backgroundColor: "#2196f3",
    color: "white",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
         
         {/* <Cards  name1="BP"  name2="BP"  name3="BP"  name4="BP" value="108/120"/> */}
{/* <br/> */}

      <Grid item xs container spacing={3}>
      <Grid xs={12} sm={6} md={12}>
        <Paper className={classes.paper}>

         <Cards  name1="Total Patient"  name2="Todat Visit"  name3="Earnings"  name4="Total Visits" value="108/120"/>
         </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>

            <Calendar />
            </Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={8}>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <Paper className={classes.paper}>
            <PatientTable />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <Paper className={classes.paper}>
          <Barchart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
