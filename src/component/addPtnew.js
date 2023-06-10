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

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");

  const handleSubmit = (e) => {
    localStorage.setItem("login", "login")
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      reasonForVisit,
    });
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
      
          <Paper  sx={{ p: 4, borderRadius: 3, boxShadow: 8, width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", gap: 2, mt:2  }}>
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
          <Box sx={{ display: "flex", justifyContent: "center", mt:4 }}>
            <Button variant="contained" color="primary" type="submit">
              Add Patient
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
    </>
  );
};

export default AddPatientForm;
