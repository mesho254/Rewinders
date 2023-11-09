import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Container } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from '../AppBar';
import Footer from '../Footer';

const GeneratorInvoice = () => {
    const initialCustomerInfo = {
        customerName: '',
        customerEmail: '',
        customerAddress: '',
      };
    
      const initialMotorInfo = {
        generatorMake: '',
        generatorModel: '',
        repairDetails: '',
        repairCost: '',
      };
    
      const [customerInfo, setCustomerInfo] = useState(initialCustomerInfo);
      const [motorInfo, setMotorInfo] = useState(initialMotorInfo);
      const [errors, setErrors] = useState({
        customerName: '',
        customerEmail: '',
        customerAddress: '',
        generatorMake: '',
        generatorModel: '',
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
          axios.post('https://rewinders-vgdr.vercel.app/api/generator/create', {
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
                generatorMake: '',
                generatorModel: '',
                repairDetails: '',
                repairCost: '',
              });
            })
            .catch((error) => {
              toast.error('Failed to send invoice');
            });
        }
      };
      
  return (
    <div>
        <ResponsiveAppBar/>
        <Container style={{marginTop:"50px", marginBottom:"100px"}}>
    <Paper style={{ padding: '20px' }}>
        <ToastContainer /> 
      <Typography variant="h5" gutterBottom style={{alignContent:"center", alignItems:"center"}}>
        Generator Repair Invoice
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
            name="generatorMake"
            label="Generator Make"
            fullWidth
            value={motorInfo.generatorMake}
            onChange={handleMotorInfoChange}
            error={Boolean(errors.generatorMake)}
            helperText={errors.generatorMake}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="generatorModel"
            label="Generator Model"
            fullWidth
            value={motorInfo.generatorModel}
            onChange={handleMotorInfoChange}
            error={Boolean(errors.generatorModel)}
            helperText={errors.generatorModel}
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
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleInvoiceSubmission} fullWidth> 
            Send Invoice
          </Button>
        </Grid>
      </Grid>
    </Paper>
    </Container>
    <Footer/>
    </div>
  );
};

export default GeneratorInvoice;
