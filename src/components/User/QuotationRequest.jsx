import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import Footer from '../Footer';
import ResponsiveAppBar from '../AppBar';

function QuotationRequest() {
  const [quotationData, setQuotationData] = useState({
    customerName: '',
    customerEmail: '',
    customerAddress: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    customerName: '',
    customerEmail: '',
    customerAddress: '',
    message: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let errorDetected = false;
    const newErrors = { ...errors };

    Object.keys(quotationData).forEach((key) => {
      if (!quotationData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        errorDetected = true;
      } else {
        newErrors[key] = '';
      }
    });

    if (errorDetected) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post('https://rewinders-vgdr.vercel.app/api/quotation/create', quotationData);
        console.log('Quotation request submitted:', response.data);
        // Assuming success; you might want to add a success message or redirect after a successful submission
        setQuotationData({ customerName: '', customerEmail: '', customerAddress: '', message: '' });
      } catch (error) {
        console.error('Error submitting quotation request:', error);
        // Handle error, show error message, etc.
      }
    }
  };

  const handleInputChange = (e) => {
    setQuotationData({
      ...quotationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <ResponsiveAppBar/>
    <Container style={{marginBottom:"100px"}}>
      <h1>SEND QUOTATION REQUEST OF YOUR CONTROL PREFERENCE </h1>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Customer Name"
          name="customerName"
          value={quotationData.customerName}
          onChange={handleInputChange}
          fullWidth
          required
          error={Boolean(errors.customerName)}
          helperText={errors.customerName}
          style={{marginTop:"10px"}}
        />
        <TextField
          label="Customer Email"
          name="customerEmail"
          value={quotationData.customerEmail}
          onChange={handleInputChange}
          fullWidth
          required
          error={Boolean(errors.customerEmail)}
          helperText={errors.customerEmail}
          style={{marginTop:"10px"}}
        />
        <TextField
          label="Customer Address"
          name="customerAddress"
          value={quotationData.customerAddress}
          onChange={handleInputChange}
          fullWidth
          required
          error={Boolean(errors.customerAddress)}
          helperText={errors.customerAddress}
          style={{marginTop:"10px"}}
        />
        <TextField
          label="Message"
          name="message"
          value={quotationData.message}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          required
          error={Boolean(errors.message)}
          helperText={errors.message}
          style={{marginTop:"10px"}}
        />
        <Button type="submit" variant="contained" onClick={handleFormSubmit} fullWidth style={{marginTop:"10px", marginBottom:"100px"}}>
          Submit
        </Button>
      </form>
    </Container>
    <Footer/>
    </>
  );
}

export default QuotationRequest;
