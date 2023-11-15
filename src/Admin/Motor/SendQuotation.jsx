import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

function SendQuotation() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSendQuotation = async () => {
    setIsLoading(true);

    try {
      // Send the quotation details to the backend for processing
      await axios.post('https://rewinders-vgdr.vercel.app/api/quotations/sendQuotation', {
        customerName,
        customerEmail,
        customerAddress,
        message,
      });

      setIsLoading(false);
      setSnackbarOpen(true);
      setSnackbarMessage('Quotation sent successfully!');
    } catch (error) {
      console.error('Error sending quotation:', error);
      setIsLoading(false);
      setSnackbarOpen(true);
      setSnackbarMessage('Failed to send quotation. Please try again.');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Send Quotation
        </Typography>
        <TextField
          label="Customer Name"
          fullWidth
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Customer Email"
          fullWidth
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Customer Address"
          fullWidth
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSendQuotation}
          style={{ marginTop: '20px' }}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Send Quotation'}
        </Button>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
}

export default SendQuotation;
