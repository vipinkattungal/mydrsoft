import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  dropzoneContainer: {
    border: '2px dashed #ddd',
    borderRadius: 4,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  dropzoneText: {
    color: '#888',
  },
  uploadedImagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  uploadedImage: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  heading: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
  inputContainer: {
    marginBottom: theme.spacing(2),
  },
}));

const UpdateUIComponent = () => {
  const classes = useStyles();
  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState([]);
  const [contactNumbers, setContactNumbers] = useState(['']);
  const [specialities, setSpecialities] = useState(['']);
  const [blogs, setBlogs] = useState(['']);
  const [doctors, setDoctors] = useState(['']);
  const [services, setServices] = useState(['']);

  const handleLogoDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setLogo(file);
    }
  };

  const handleImagesDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const newImages = [...images, ...acceptedFiles];
      setImages(newImages);
    }
  };

  const handleAddContactNumber = () => {
    setContactNumbers([...contactNumbers, '']);
  };

  const handleAddSpeciality = () => {
    setSpecialities([...specialities, '']);
  };

  const handleAddBlog = () => {
    setBlogs([...blogs, '']);
  };

  const handleAddDoctor = () => {
    setDoctors([...doctors, '']);
  };

  const handleAddService = () => {
    setServices([...services, '']);
  };

  const handleContactNumberChange = (index, value) => {
    const updatedContactNumbers = [...contactNumbers];
    updatedContactNumbers[index] = value;
    setContactNumbers(updatedContactNumbers);
  };

  const handleSpecialityChange = (index, value) => {
    const updatedSpecialities = [...specialities];
    updatedSpecialities[index] = value;
    setSpecialities(updatedSpecialities);
  };

  const handleBlogChange = (index, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = value;
    setBlogs(updatedBlogs);
  };

  const handleDoctorChange = (index, value) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index] = value;
    setDoctors(updatedDoctors);
  };

  const handleServiceChange = (index, value) => {
    const updatedServices = [...services];
    updatedServices[index] = value;
    setServices(updatedServices);
  };
  const handleUpload = () => {
    console.log('Uploading data:');
    console.log('Contact Numbers:', contactNumbers);
    console.log('Specialities:', specialities);
    console.log('Blogs:', blogs);
    console.log('Doctors:', doctors);
    console.log('Services:', services);
  };

  const handlePublish = () => {
    console.log('Publishing data:');
    console.log('Contact Numbers:', contactNumbers);
    console.log('Specialities:', specialities);
    console.log('Blogs:', blogs);
    console.log('Doctors:', doctors);
    console.log('Services:', services);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.heading}>
       <strong>Website Setup</strong> 
      </Typography>

      {/* Title */}
      <Box className={classes.container}>
        <TextField label="Title" fullWidth />
      </Box>

      {/* Logo */}
      <Box className={classes.container}>
        <Typography variant="body1">Logo:</Typography>
        <Dropzone onDrop={handleLogoDrop} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <Box {...getRootProps()} className={classes.dropzoneContainer}>
              <input {...getInputProps()} />
              <Typography className={classes.dropzoneText}>
                {logo ? logo.name : 'Drag and drop or click to upload logo'}
              </Typography>
            </Box>
          )}
        </Dropzone>
      </Box>

      {/* About Us */}
      <Box className={classes.container}>
        <TextField label="About Us" multiline rows={4} fullWidth />
      </Box>

      {/* Contact Us */}
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Contact Numbers
        </Typography>
        {contactNumbers.map((number, index) => (
          <TextField
            key={index}
            label={`Contact Number ${index + 1}`}
            value={number}
            onChange={(e) => handleContactNumberChange(index, e.target.value)}
            fullWidth
            className={classes.inputContainer}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddContactNumber}
          className={classes.addButton}
        >
          Add Contact Number
        </Button>
      </Box>

      {/* Blog */}
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Blogs
        </Typography>
        {blogs.map((blog, index) => (
          <TextField
            key={index}
            label={`Blog ${index + 1}`}
            value={blog}
            onChange={(e) => handleBlogChange(index, e.target.value)}
            fullWidth
            className={classes.inputContainer}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddBlog}
          className={classes.addButton}
        >
          Add Blog
        </Button>
      </Box>

      {/* Services Offered */}
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Services Offered
        </Typography>
        {services.map((service, index) => (
          <TextField
            key={index}
            label={`Service ${index + 1}`}
            value={service}
            onChange={(e) => handleServiceChange(index, e.target.value)}
            fullWidth
            className={classes.inputContainer}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddService}
          className={classes.addButton}
        >
          Add Service
        </Button>
      </Box>


      {/* Images */}
      <Box className={classes.container}>
        <Typography variant="body1">Images:</Typography>
        <Dropzone onDrop={handleImagesDrop} accept="image/*" multiple>
          {({ getRootProps, getInputProps }) => (
            <Box {...getRootProps()} className={classes.dropzoneContainer}>
              <input {...getInputProps()} />
              <Typography className={classes.dropzoneText}>
                {images.length > 0
                  ? `${images.length} image(s) selected`
                  : 'Drag and drop or click to upload images'}
              </Typography>
            </Box>
          )}
        </Dropzone>
        <Box className={classes.uploadedImagesContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Image ${index + 1}`}
              className={classes.uploadedImage}
            />
          ))}
        </Box>
      </Box>

      {/* Our Doctors */}
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Our Doctors
        </Typography>
        {doctors.map((doctor, index) => (
          <TextField
            key={index}
            label={`Doctor ${index + 1}`}
            value={doctor}
            onChange={(e) => handleDoctorChange(index, e.target.value)}
            fullWidth
            className={classes.inputContainer}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddDoctor}
          className={classes.addButton}
        >
          Add Doctor
        </Button>
      </Box>
      {/* Specialities */}
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Specialities
        </Typography>
        {specialities.map((speciality, index) => (
          <TextField
            key={index}
            label={`Speciality ${index + 1}`}
            value={speciality}
            onChange={(e) => handleSpecialityChange(index, e.target.value)}
            fullWidth
            className={classes.inputContainer}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddSpeciality}
          className={classes.addButton}
        >
          Add Speciality
        </Button>
      </Box>

      {/* Address */}
      <Box className={classes.container}>
        <TextField label="Address" multiline rows={4} fullWidth />
      </Box>

      {/* Email */}
      <Box className={classes.container}>
        <TextField label="Email" fullWidth />
      </Box>

      {/* Contact Number */}
      <Box className={classes.container}>
        <TextField label="Contact Number" fullWidth />
      </Box>

      {/* Department */}
      <Box className={classes.container}>
        <TextField label="Department" fullWidth />
      </Box>

      {/* Website URL */}
      <Box className={classes.container}>
        <TextField label="Website URL" fullWidth />
      </Box>

      {/* Medisoft URL */}
      <Box className={classes.container}>
        <TextField label="Medisoft URL" fullWidth />
      </Box>

      {/* Instagram Link */}
      <Box className={classes.container}>
        <TextField label="Instagram Link" fullWidth />
      </Box>

      {/* Facebook Link */}
      <Box className={classes.container}>
        <TextField label="Facebook Link" fullWidth />
      </Box>

      <Button variant="contained" onClick={handleUpload}>Upload</Button>
      <Button variant="contained"onClick={handlePublish}>Publish</Button>
    </div>
  );
};

export default UpdateUIComponent;
