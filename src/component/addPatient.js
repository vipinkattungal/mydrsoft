import { useState } from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';
//import './PatientForm.css';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function PatientForm() {
  const history = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Gender: ${gender}, Mobile Number: ${mobileNumber}, Address: ${address}`);
    history('/patientDetails');

  };

  return (
    <form onSubmit={handleSubmit} className="patient-form ">
     
      <TextField

        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={handleFirstNameChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleLastNameChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Age"
        type="number"
        variant="outlined"
        value={age}
        onChange={handleAgeChange}
        margin="normal"
        required
        fullWidth
      />
      <Select
        label="Gender"
        variant="outlined"
        value={gender}
        onChange={handleGenderChange}
        margin="normal"
        required
        fullWidth
      >
        <MenuItem value="">Select Gender</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
      <TextField
        label="Mobile Number"
        type="tel"
        variant="outlined"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Address"
        variant="outlined"
        value={address}
        onChange={handleAddressChange}
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" type='submit'><strong>SUBMIT</strong></Button>
    </Box>
    </form>
  );
}
