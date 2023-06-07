import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  formControl: {
    minWidth: 200,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    maxWidth: 600,
    width: '100%',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  modalHeader: {
    marginBottom: theme.spacing(2),
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  invoiceContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const InvoiceGenerator = () => {
  const classes = useStyles();
  const [patientId, setPatientId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [type, setType] = useState('virtual');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const handlePreviewModalOpen = () => {
    setPreviewModalOpen(true);
  };

  const handlePreviewModalClose = () => {
    setPreviewModalOpen(false);
  };

  const handleGenerateInvoice = () => {
    // Logic to generate and save the invoice
    console.log('Generating invoice...');
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" gutterBottom>
          Generate Invoice
        </Typography>
        <TextField
          label="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="virtual">Virtual</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handlePreviewModalOpen}>
          Preview
        </Button>
        <Modal open={previewModalOpen} onClose={handlePreviewModalClose} className={classes.modal}>
          <div className={classes.modalContent}>
            <Typography variant="h4" className={classes.modalHeader}>
              Clinic Name
            </Typography>
            <div className={classes.invoiceContainer}>
              <div className={classes.section}>
                <Typography variant="body1" className={classes.label}>
                  Patient ID:
                  <span className={classes.value}>{patientId}</span>
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  Phone Number:
                  <span className={classes.value}>{phoneNumber}</span>
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  Type:
                  <span className={classes.value}>{type}</span>
                </Typography>
              </div>
              <div className={classes.section}>
                <Typography variant="body1" className={classes.label}>
                  Category:
                  <span className={classes.value}>{category}</span>
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  Amount:
                  <span className={classes.value}>{amount}</span>
                </Typography>
              </div>
            </div>
            <div className={classes.actions}>
              <Button variant="contained" color="primary">
                Print
              </Button>
              <Button variant="contained" color="primary">
                Send to Patient
              </Button>
            </div>
          </div>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default InvoiceGenerator;
