import React, { useState } from 'react';
import {
  TextField,
  Button,
  Modal,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const InvoiceGenerator = () => {
  const [open, setOpen] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    patientId: '',
    patientPhone: '',
    type: '',
    category: '',
    amount: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setInvoiceData({
      ...invoiceData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePreview = () => {
    handleOpen();
  };

  const handlePrint = () => {
    // Logic to print the invoice
  };

  const handleSendToWhatsApp = () => {
    // Logic to send the invoice to WhatsApp
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Box>
          <InputLabel sx={{ fontWeight: 'bold' }}>Patient ID</InputLabel>
          <TextField
            name="patientId"
            value={invoiceData.patientId}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box>
          <InputLabel sx={{ fontWeight: 'bold' }}>Patient Phone</InputLabel>
          <TextField
            name="patientPhone"
            value={invoiceData.patientPhone}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box>
          <InputLabel sx={{ fontWeight: 'bold' }}>Type</InputLabel>
          <FormControl>
            <Select
              name="type"
              value={invoiceData.type}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="virtual">Virtual</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <InputLabel sx={{ fontWeight: 'bold' }}>Category</InputLabel>
          <FormControl>
            <Select
              name="category"
              value={invoiceData.category}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
              <MenuItem value="category3">Category 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <InputLabel sx={{ fontWeight: 'bold' }}>Amount</InputLabel>
          <TextField
            name="amount"
            value={invoiceData.amount}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Button variant="contained" onClick={handlePreview}>
          Preview
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            boxShadow: 24,
            p: 2,
            outline: 'none',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Invoice Preview
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Patient ID:</strong> {invoiceData.patientId}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Patient Phone:</strong> {invoiceData.patientPhone}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Type:</strong> {invoiceData.type}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Category:</strong> {invoiceData.category}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            <strong>Amount:</strong> {invoiceData.amount}
          </Typography>

          <Button variant="contained" onClick={handlePrint} sx={{ marginRight: '8px' }}>
            Print
          </Button>
          <Button variant="contained" onClick={handleSendToWhatsApp}>
            Send to WhatsApp
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default InvoiceGenerator;
