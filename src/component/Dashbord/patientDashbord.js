import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Calendar from "./Calender";
import LineChart from "./components/LineChart";
import PatientTable from "./components/PatientTable";
import Note from "./components/Note";
import PieChart from "./components/PieChart"
import Cards from "./card"
import humanbodyfrontal from '../../image/humanbodyfrontal.jpg'
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "./charts";
import PatientVitals from './components/vitalsCard'
import Barchart from './components/gaugeChart'
import PatientAppointmentsTable from './components/appointmentTable'
import PatientHistoryTable from './components/patientHistory'
import ClinicApp from './components/bodyTag'

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

const PatientDashboard = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>

      {/* <Cards/><br/> */}

      <Grid item xs container spacing={3}>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>

            <ClinicApp/>
          </Paper>
        </Grid>
        <Grid item xs={6} md={9}>
          <Paper className={classes.paper}>
            {/* <LineChart style={{height:'100px',width:'20%'}} /> */}
            {/* <Cards  name1="BP"  name2="O2"  name3="Heart Beat"  name4="pulse" value="108/120"/> */}
            <PatientVitals />
            <PatientVitals />

          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Paper className={classes.paper}>
            <h6>Patient Satisfaction</h6>

            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Paper className={classes.paper}>
            <h6>History</h6>
            <PatientHistoryTable />
          </Paper>
        </Grid>
        <Grid item xs={6} md={12} lg={4}>
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

export default PatientDashboard;
