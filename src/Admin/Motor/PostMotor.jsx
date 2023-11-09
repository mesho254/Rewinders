import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer';
import ResponsiveAppBar from '../../components/AppBar';
import { useNavigate } from 'react-router-dom';

const PostMotor = () => {
  const [motorData, setMotorData] = useState({
    make: '',
    model: '',
    year: '',
    type: '',
    voltage: '',
    horsepower: '',
    speed: '',
    coolingSystem: '',
    weight: '',
    dimensions: '',
    condition: '',
    phase: '',
    frequency: ''
  });

  const navigate = useNavigate();

 

  const handleChange = (e) => {
    setMotorData({ ...motorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend
      const response = await axios.post('https://rewinders-vgdr.vercel.app/api/motor/addMotor', motorData);
      console.log('Motor posted:', response.data);
      toast.success('Motor posted successfully!');
    } catch (error) {
      toast.error('Failed to post motor. Please try again.');
      console.error('Failed to post motor:', error);
    }
  };

  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    if (!(isAuthenticated && userRole === 'admin')) {
      navigate('/login'); // Redirect to '/login'
    }
  }, [isAuthenticated, userRole, navigate]);

  return isAuthenticated && userRole === 'admin' ? (<>
  <ResponsiveAppBar/>
    <Container style={{marginTop:"50px", marginBottom:"50px"}}>
        <ToastContainer/>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Make"
          name="make"
          value={motorData.make}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Model"
          name="model"
          value={motorData.model}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Year"
          name="year"
          value={motorData.year}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Type"
          name="type"
          value={motorData.type}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Voltage"
          name="voltage"
          value={motorData.voltage}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Horsepower"
          name="horsepower"
          value={motorData.horsepower}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Speed"
          name="speed"
          value={motorData.speed}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cooling System"
          name="coolingSystem"
          value={motorData.coolingSystem}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          name="weight"
          value={motorData.weight}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Dimensions"
          name="dimensions"
          value={motorData.dimensions}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Condition"
          name="condition"
          value={motorData.condition}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phase"
          name="phase"
          value={motorData.phase}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Frequency"
          name="frequency"
          value={motorData.frequency}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
          Submit
        </Button>
      </Grid>
    </Grid>
    </Container>
    <Footer/>
    </>
  ): null
};

export default PostMotor;
