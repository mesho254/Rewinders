import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography, Container, CircularProgress, IconButton } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from '../AppBar';
import Footer from '../Footer';
import { useNavigate, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Invoice = () => {
    const initialCustomerInfo = {
        customerName: '',
        customerEmail: '',
        customerAddress: '',
      };
    
      const initialMotorInfo = {
        motorMake: '',
        motorModel: '',
        repairDetails: '',
        repairCost: '',
      };
    
      const [customerInfo, setCustomerInfo] = useState(initialCustomerInfo);
      const [motorInfo, setMotorInfo] = useState(initialMotorInfo);
      const navigate = useNavigate()
      const [isLoading, setIsLoading] = useState(false)
    
      const [errors, setErrors] = useState({
        customerName: '',
        customerEmail: '',
        customerAddress: '',
        motorMake: '',
        motorModel: '',
        repairDetails: '',
        repairCost: '',
      });
    
      const handleCustomerInfoChange = (event) => {
        setCustomerInfo({
          ...customerInfo,
          [event.target.name]: event.target.value,
        });
        setErrors({
          ...errors,
          [event.target.name]: event.target.value ? '' : `${event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1)} is required`,
        });
      };
    
      const handleMotorInfoChange = (event) => {
        setMotorInfo({
          ...motorInfo,
          [event.target.name]: event.target.value,
        });
        setErrors({
          ...errors,
          [event.target.name]: event.target.value ? '' : `${event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1)} is required`,
        });
      };
    
      const handleInvoiceSubmission = () => {
        let errorDetected = false;
        const newErrors = { ...errors };
        Object.keys(customerInfo).forEach((key) => {
          if (!customerInfo[key]) {
            newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            errorDetected = true;
          }
        });
    
        Object.keys(motorInfo).forEach((key) => {
          if (!motorInfo[key]) {
            newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            errorDetected = true;
          }
        });
    
        if (errorDetected) {
          setErrors(newErrors);
        } else {
          setIsLoading(true)
          axios.post('https://rewinders-vgdr.vercel.app/api/invoices/create', {
            ...customerInfo,
            ...motorInfo,
          })
            .then((response) => {
              toast.success('Invoice sent successfully');
              // Clear form fields after successful submission
              setCustomerInfo(initialCustomerInfo);
              setMotorInfo(initialMotorInfo);
              setErrors({
                customerName: '',
                customerEmail: '',
                customerAddress: '',
                motorMake: '',
                motorModel: '',
                repairDetails: '',
                repairCost: '',
              });
              setIsLoading(false)
            })
            .catch((error) => {
              toast.error('Failed to send invoice');
              setIsLoading(false)
            });
        }
      };
      const isAuthenticated = localStorage.getItem('token') !== null;
      useEffect(() => {
        if (!(isAuthenticated)) {
          navigate('/login'); // Redirect to '/login'
        }
      }, [isAuthenticated, navigate]);
      
  return (
    <div>
        <ResponsiveAppBar/>
        <Container style={{marginTop:"50px", marginBottom:"100px"}}>
        <Link to="/services">
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
    <Paper style={{ padding: '20px' }}>
        <ToastContainer /> 
      <Typography variant="h5" gutterBottom style={{alignContent:"center", alignItems:"center"}}>
        Motor Repair Invoice
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
                name="customerName"
                label="Customer Name"
                fullWidth
                value={customerInfo.customerName}
                onChange={handleCustomerInfoChange}
                error={Boolean(errors.customerName)}
                helperText={errors.customerName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="customerEmail"
                label="Customer Email"
                fullWidth
                value={customerInfo.customerEmail}
                onChange={handleCustomerInfoChange}
                error={Boolean(errors.customerEmail)}
                helperText={errors.customerEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="customerAddress"
                label="Customer Address"
                fullWidth
                value={customerInfo.customerAddress}
                onChange={handleCustomerInfoChange}
                error={Boolean(errors.customerAddress)}
                helperText={errors.customerAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="motorMake"
                label="Motor Make"
                fullWidth
                value={motorInfo.motorMake}
                onChange={handleMotorInfoChange}
                error={Boolean(errors.motorMake)}
                helperText={errors.motorMake}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="motorModel"
                label="Motor Model"
                fullWidth
                value={motorInfo.motorModel}
                onChange={handleMotorInfoChange}
                error={Boolean(errors.motorModel)}
                helperText={errors.motorModel}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="repairDetails"
                label="Repair Details"
                fullWidth
                multiline
                rows={4}
                value={motorInfo.repairDetails}
                onChange={handleMotorInfoChange}
                error={Boolean(errors.repairDetails)}
                helperText={errors.repairDetails}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="repairCost"
                label="Repair Cost"
                fullWidth
                value={motorInfo.repairCost}
                onChange={handleMotorInfoChange}
                error={Boolean(errors.repairCost)}
                helperText={errors.repairCost}
              />
            </Grid>
            {isAuthenticated ? (
        <Grid item xs={12}>
          {isLoading ? (<div><CircularProgress/></div>):(
          <Button variant="contained" color="primary" onClick={handleInvoiceSubmission} fullWidth> 
            Send Invoice
          </Button>)}
        </Grid>):null}
      </Grid>
    </Paper>
    </Container>
    <Footer/>
    </div>
  );
};

export default Invoice;
