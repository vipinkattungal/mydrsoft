import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const dummyData = [
  {
    id: 1,
    date: '2022-05-01',
    time: '10:00 AM',
    doctor: 'Dr. John Smith',
    specialty: 'Cardiology',
    location: '123 Main St',
    diagnosis: 'High blood pressure',
    treatment: 'Prescribed medication'
  },
  {
    id: 2,
    date: '2022-05-10',
    time: '02:00 PM',
    doctor: 'Dr. Jane Doe',
    specialty: 'Dermatology',
    location: '456 Elm St',
    diagnosis: 'Eczema',
    treatment: 'Prescribed ointment'
  },
  {
    id: 3,
    date: '2022-05-15',
    time: '11:00 AM',
    doctor: 'Dr. Michael Lee',
    specialty: 'Pediatrics',
    location: '789 Oak St',
    diagnosis: 'Flu',
    treatment: 'Prescribed rest and fluids'
  }
];

const PatientVisitHistoryTable = ({ data = dummyData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Specialty</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Diagnosis</TableCell>
            <TableCell>Treatment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((visit) => (
            <TableRow key={visit.id}>
              <TableCell>{visit.date}</TableCell>
              <TableCell>{visit.time}</TableCell>
              <TableCell>{visit.doctor}</TableCell>
              <TableCell>{visit.specialty}</TableCell>
              <TableCell>{visit.location}</TableCell>
              <TableCell>{visit.diagnosis}</TableCell>
              <TableCell>{visit.treatment}</TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <Typography variant="subtitle1" align="center" padding={2}>
          No data available
        </Typography>
      )}
    </TableContainer>
  );
};

export default PatientVisitHistoryTable;
