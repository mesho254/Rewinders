import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container, Typography, CircularProgress } from '@mui/material';
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
  const [isLoading, setIsLoading] = useState(false)
 
  const [errors, setErrors] = useState({
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

  const handleChange = (e) => {
    setMotorData({
      ...motorData,
      // eslint-disable-next-line no-restricted-globals
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      // eslint-disable-next-line no-restricted-globals
      [event.target.name]: event.target.value ? '' : `${event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1)} is required`,
    });
  };

  const handleSubmit = async (e) => {
    let errorDetected = false;
        const newErrors = { ...errors };
        Object.keys(motorData).forEach((key) => {
          if (!motorData[key]) {
            newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            errorDetected = true;
          }
        });
    
        if (errorDetected) {
          setErrors(newErrors);
        } else {
          setIsLoading(true)
      // Make a POST request to your backend
       axios.post('https://rewinders-vgdr.vercel.app/api/motor/addMotor',{
        ...motorData
      } ).then((response)=>{
      console.log('Motor posted:', response.data);
      toast.success('Motor posted successfully!');
      setMotorData({
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
      })
      setErrors({
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
      })
      setIsLoading(false)
      }).catch ((error)=> {
      toast.error('Failed to post motor. Please try again.');
      console.error('Failed to post motor:', error);
      setIsLoading(false)
    })
  };
}

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
        <Typography variant='h3'>Post Motors That You Are Selling</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Make"
          name="make"
          value={motorData.make}
          onChange={handleChange}
          error={Boolean(errors.make)}
          helperText={errors.make}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Model"
          name="model"
          value={motorData.model}
          onChange={handleChange}
          error={Boolean(errors.model)}
          helperText={errors.model}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Year"
          name="year"
          value={motorData.year}
          onChange={handleChange}
          error={Boolean(errors.year)}
          helperText={errors.year}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Type"
          name="type"
          value={motorData.type}
          onChange={handleChange}
          error={Boolean(errors.type)}
          helperText={errors.type}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Voltage"
          name="voltage"
          value={motorData.voltage}
          onChange={handleChange}
          error={Boolean(errors.voltage)}
          helperText={errors.voltage}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Horsepower"
          name="horsepower"
          value={motorData.horsepower}
          onChange={handleChange}
          error={Boolean(errors.horsepower)}
          helperText={errors.horsepower}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Speed"
          name="speed"
          value={motorData.speed}
          onChange={handleChange}
          error={Boolean(errors.speed)}
          helperText={errors.speed}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cooling System"
          name="coolingSystem"
          value={motorData.coolingSystem}
          onChange={handleChange}
          error={Boolean(errors.coolingSystem)}
          helperText={errors.coolingSystem}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          name="weight"
          value={motorData.weight}
          onChange={handleChange}
          error={Boolean(errors.weight)}
          helperText={errors.weight}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Dimensions"
          name="dimensions"
          value={motorData.dimensions}
          onChange={handleChange}
          error={Boolean(errors.dimensions)}
          helperText={errors.dimensions}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Condition"
          name="condition"
          value={motorData.condition}
          onChange={handleChange}
          error={Boolean(errors.condition)}
          helperText={errors.condition}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phase"
          name="phase"
          value={motorData.phase}
          onChange={handleChange}
          error={Boolean(errors.phase)}
          helperText={errors.phase}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Frequency"
          name="frequency"
          value={motorData.frequency}
          onChange={handleChange}
          error={Boolean(errors.frequency)}
          helperText={errors.frequency}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
      {isLoading ? (<div><CircularProgress/></div>):(
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
          Submit
        </Button>)}
      </Grid>
    </Grid>
    </Container>
    <Footer/>
    </>
  ): null
};

export default PostMotor;
