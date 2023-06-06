import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";

const AddAppointmentModal = ({ open, onClose }) => {
  const [appointmentData, setAppointmentData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3>Add Appointment</h3>
      <TextField
        name="doctor"
        label="Doctor"
        value={appointmentData.doctor}
        onChange={handleChange}
      />
      <TextField
        name="date"
        label="Date"
        type="date"
        value={appointmentData.date}
        onChange={handleChange}
      />
      <TextField
        name="time"
        label="Time"
        type="time"
        value={appointmentData.time}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Appointment
      </Button>
    </Modal>
  );
};

export default AddAppointmentModal;
