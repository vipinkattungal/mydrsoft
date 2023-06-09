import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Button,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import AttachmentIcon from '@mui/icons-material/Attachment';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'absolute',
    width: '80%',
    maxWidth: 600,
    backgroundColor: theme.palette.background?.paper || '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PatientHistoryTable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    // Add download logic here
  };

  const tableData = [
    {
      date: '2023-06-01',
      time: '09:00 AM',
      patientName: 'John Doe',
      reason: 'Fever',
      fileUrl: 'https://placebear.com/g/200/200',
    },
    {
      date: '2023-06-02',
      time: '10:00 AM',
      patientName: 'Jane Smith',
      reason: 'Cough',
      fileUrl: 'https://source.unsplash.com/user/c_v_r/1900×800',
    },
    // Add more data rows as needed
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Reason of Visit</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>
                  {row.fileUrl && (
                    <Button onClick={() => handleOpen(row.fileUrl)}>
                      <AttachmentIcon />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <div className={classes.modalContent}>
          <img src={selectedImage} alt="Patient Image" width="100%" />
          <Button onClick={handleDownload}>Download</Button>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export default PatientHistoryTable;
