import React, { useState} from 'react';
import axios from 'axios';
import { TextField, Button, Container, CircularProgress, IconButton } from '@mui/material';
import Footer from '../Footer';
import ResponsiveAppBar from '../AppBar';
import RedirectPage from '../../hooks/RedirectPage';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [isLoading, setIsLoading] = useState(false)


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
        setIsLoading(true)
        const response = await axios.post('https://rewinders-vgdr.vercel.app/api/quotation/create', quotationData);
        console.log('Quotation request submitted:', response.data);
        toast.success('Quotation request submitted');
        // Assuming success; you might want to add a success message or redirect after a successful submission
        setQuotationData({ customerName: '', customerEmail: '', customerAddress: '', message: '' });
        setIsLoading(false)
      } catch (error) {
        console.error('Error submitting quotation request:', error);
        toast.error('Error submitting quotation request');
        setIsLoading(false)
      }
    }
  };

  const handleInputChange = (e) => {
    setQuotationData({
      ...quotationData,
      [e.target.name]: e.target.value
    });
  };

  const isAuthenticated = localStorage.getItem('token') !== null;

  return isAuthenticated ?  (
    <>
    <ResponsiveAppBar/>
    <Container style={{marginBottom:"100px"}}>
    <Link to="/services">
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
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
        {isLoading ? (<div><CircularProgress/></div>):(
        <Button type="submit" variant="contained" onClick={handleFormSubmit} fullWidth style={{marginTop:"10px", marginBottom:"100px"}}>
          Submit
        </Button>)}
      </form>
    </Container>
    <ToastContainer/>
    <Footer/>
    </>
  ): (<div><RedirectPage/></div>)
}

export default QuotationRequest;
