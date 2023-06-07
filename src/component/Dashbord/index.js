import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Calendar from "./Calender";
import LineChart from "./components/LineChart";
import PatientTable from "./components/PatientTable";
import Note from "./components/Note";
import PieChart from "./components/PieChart"
import Cards from "./card"
import AppointmentTable from './components/appointmentTable' 
import UpcomingAppointments from './components/upcomingAppt' 
import DoctorSidebarModal from './components/sidebar'
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
  const appointments = [
    { name: 'Appointment 1', time: '9:00 AM' },
    { name: 'Appointment 2', time: '10:30 AM' },
    { name: 'Appointment 3', time: '1:00 PM' },
  ];
  
  
  return (
    <div className={classes.root}>
      <Grid item xs container spacing={3}>
        <Grid xs={6} sm={6} md={12}>

          <Cards name1="Total Patient" name2="Today Visit" name3="Earnings" name4="Total Visits" value="108/120" />
        <br/>
        </Grid>
   

        <Grid item xs={6} sm={6} md={4}>
          <Paper className={classes.paper}>

            <Calendar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={8}>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} >
          <Paper className={classes.paper}>
            <PatientTable />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Paper className={classes.paper}>
            <AppointmentTable />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Paper className={classes.paper}>
          <UpcomingAppointments appointments={appointments} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={12}>
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
