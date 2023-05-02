import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton, 
  Avatar 
} from '@material-ui/core';
import { 
  Edit as EditIcon,
  Delete as DeleteIcon 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  },
  avatar: {
    display: 'inline-flex',
    marginRight: theme.spacing(1)
  }
}));

const dummyAppointments = [
  {
    id: 1,
    date: '2022-05-05',
    time: '09:30 AM',
    doctor: 'Dr. John Smith',
    specialty: 'Cardiology',
    location: '123 Main St'
  },
  {
    id: 2,
    date: '2022-05-10',
    time: '02:00 PM',
    doctor: 'Dr. Jane Doe',
    specialty: 'Dermatology',
    location: '456 Elm St'
  },
  {
    id: 3,
    date: '2022-05-15',
    time: '11:00 AM',
    doctor: 'Dr. Michael Lee',
    specialty: 'Pediatrics',
    location: '789 Oak St'
  }
];

const PatientAppointmentsTable = ({ appointments = dummyAppointments }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Specialty</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id} className={classes.row}>
              <TableCell component="th" scope="row">
                {appointment.date}
              </TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <Avatar alt={appointment.doctor} src="/static/images/avatar/1.jpg" className={classes.avatar} />
                {appointment.doctor}
              </TableCell>
              <TableCell>{appointment.specialty}</TableCell>
              <TableCell>{appointment.location}</TableCell>
              <TableCell>
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientAppointmentsTable;
