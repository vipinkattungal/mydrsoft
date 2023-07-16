import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
} from "@mui/material";
import { Typography } from '@mui/material';
import axios from "axios"
import { useCookies } from 'react-cookie'
import patients, { addPatient } from "../app/patients";
import { useSelector,useDispatch} from'react-redux'
const AddPatientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [cookie] = useCookies(['jwt']);
const dispatch = useDispatch()
  const handleSubmit = async (e) => {
dispatch(addPatient({id:"0",name:"",lastname:lastName, age:age, gender, phoneNumber:phoneNumber,reasonForVisit:reasonForVisit}))
   // console.log(e, "items");
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${cookie.jwt}`,
        // Add any other custom headers as needed
      };
      const generateUniqueId = () => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
        const formattedRandom = String(random).padStart(4, '0'); // Ensure the random number has 4 digits
        const uniqueId = `${formattedRandom}`;
        return uniqueId;
      };

      // Example usage
      const uniqueId = generateUniqueId();
      console.log(uniqueId);

      const response = await axios.post('https://clinic-cz9h.onrender.com/patients/addpatient', {
        "patientId": uniqueId,
        "patientName": firstName,
        "email": "test@gmail.com",
        "mobileNumber": phoneNumber,
        "age": age,
        "gender": gender,
        "address": reasonForVisit,
        "pinCode": "660044"
      }, { headers });

      const res = response.data;
      // console.log(res.status)
      if (res.status === 'success')
        window.location.href = '/patientDetails';
    } catch (error) {
      console.log(error);
    }



  };

  return (
    <>
      <Typography variant="h4" align="center">
        Add Patient
      </Typography>
      <Box

        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "cebter",
          justifyContent: "center",
          height: "85vh",


        }}
      >

        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 8, width: "100%" }}>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              required
              label="First Name"
              variant="outlined"
              margin="dense"
              sx={{ flexGrow: 1 }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              label="Last Name"
              variant="outlined"
              margin="dense"
              sx={{ flexGrow: 1 }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <TextField
            required
            label="Age"
            variant="outlined"
            margin="dense"
            type="number"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <FormControl required fullWidth margin="dense">
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            label="Phone Number"
            variant="outlined"
            margin="dense"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            required
            label="Reason for Visit"
            variant="outlined"
            margin="dense"
            fullWidth
            multiline
            rows={3}
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              Add Patient
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default AddPatientForm;
