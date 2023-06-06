import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from '@mui/material';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));

const AppointmentTable = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    phone: '',
    age: '',
    date: '',
    time: '',
    reason: '',
    status: '',
    isNewCustomer: true,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleChange = () => {
    setNewAppointment((prevState) => ({
      ...prevState,
      isNewCustomer: !prevState.isNewCustomer,
    }));
  };

  const handleAddAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({
      patientName: '',
      phone: '',
      age: '',
      date: '',
      time: '',
      reason: '',
      status: '',
      isNewCustomer: true,
    });
    handleClose();
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div>

    
      <Button variant="contained" onClick={handleOpen}>
        Add Appointment
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Reason of Visit</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.phone}</TableCell>
                <TableCell>{appointment.age}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteAppointment(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className={classes.modalContent}>
          <h2>Add Appointment</h2>
          <FormControlLabel
          
            control={
              <Switch
                checked={newAppointment.isNewCustomer}
                onChange={handleToggleChange}
              />
            }
            label="Existing Customer"
          />
          {!newAppointment.isNewCustomer ? (
            <>
              <TextField
                label="Patient Name"
                name="patientName"
                value={newAppointment.patientName}
                onChange={handleInputChange}
              />
              <TextField
                label="Phone"
                name="phone"
                value={newAppointment.phone}
                onChange={handleInputChange}
              />
              <TextField
                label="Time"
                name="time"
                value={newAppointment.time}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <>
              <TextField
                label="Patient Name"
                name="patientName"
                value={newAppointment.patientName}
                onChange={handleInputChange}
              />
              <TextField
                label="Phone"
                name="phone"
                value={newAppointment.phone}
                onChange={handleInputChange}
              />
              <TextField
                label="Age"
                name="age"
                value={newAppointment.age}
                onChange={handleInputChange}
              />
              <TextField
                label="Date"
                name="date"
                value={newAppointment.date}
                onChange={handleInputChange}
              />
              <TextField
                label="Time"
                name="time"
                value={newAppointment.time}
                onChange={handleInputChange}
              />
              <TextField
                label="Reason of Visit"
                name="reason"
                value={newAppointment.reason}
                onChange={handleInputChange}
              />
              <TextField
                label="Status"
                name="status"
                value={newAppointment.status}
                onChange={handleInputChange}
              />
            </>
          )}
          <Button variant="contained" onClick={handleAddAppointment}>
            Add
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentTable;
