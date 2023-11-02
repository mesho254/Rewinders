import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Container } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from '../AppBar';
import Footer from '../Footer';

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
    
      const handleCustomerInfoChange = (event) => {
        setCustomerInfo({
          ...customerInfo,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleMotorInfoChange = (event) => {
        setMotorInfo({
          ...motorInfo,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleInvoiceSubmission = () => {
        axios.post('https://rewinders-vgdr.vercel.app/api/invoices/create', {
          ...customerInfo,
          ...motorInfo,
        })
          .then((response) => {
            toast.success('Invoice sent successfully');
            // Clear form fields after successful submission
            setCustomerInfo(initialCustomerInfo);
            setMotorInfo(initialMotorInfo);
          })
          .catch((error) => {
            toast.error('Failed to send invoice');
          });
      };
      
  return (
    <div>
        <ResponsiveAppBar/>
        <Container style={{marginTop:"50px", marginBottom:"100px"}}>
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="customerEmail"
            label="Customer Email"
            fullWidth
            value={customerInfo.customerEmail}
            onChange={handleCustomerInfoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="customerAddress"
            label="Customer Address"
            fullWidth
            value={customerInfo.customerAddress}
            onChange={handleCustomerInfoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="motorMake"
            label="Motor Make"
            fullWidth
            value={motorInfo.motorMake}
            onChange={handleMotorInfoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="motorModel"
            label="Motor Model"
            fullWidth
            value={motorInfo.motorModel}
            onChange={handleMotorInfoChange}
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="repairCost"
            label="Repair Cost"
            fullWidth
            value={motorInfo.repairCost}
            onChange={handleMotorInfoChange}
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

export default Invoice;
