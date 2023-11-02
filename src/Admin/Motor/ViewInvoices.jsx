import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Paper, Grid, Typography, Button, IconButton, Container, useMediaQuery, useTheme  } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ViewInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isMessageListVisible, setMessageListVisibility] = useState(true);
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/invoices/allInvoices');
        const updatedInvoices = response.data.map(invoice => ({ ...invoice, read: false }));
        setInvoices(updatedInvoices);
      } catch (error) {
        console.error('Failed to fetch invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const fetchUpdatedInvoices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/invoices/allInvoices');
      setInvoices(response.data);
    } catch (error) {
      console.error('Failed to fetch updated invoices:', error);
    }
  };

  const markAsRead = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/invoices/updateStatus/${selectedInvoice._id}`, { read: true });
      fetchUpdatedInvoices();
    } catch (error) {
      console.error('Failed to mark invoice as read:', error);
    }
  };
  
  const markAsUnread = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/invoices/updateStatus/${selectedInvoice._id}`, { read: false });
      fetchUpdatedInvoices();
    } catch (error) {
      console.error('Failed to mark invoice as unread:', error);
    }
  };

  const toggleMessageList = () => {
    setMessageListVisibility(!isMessageListVisible);
  };

  return (
    <Container>
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        All Invoices
      </Typography>
      <IconButton onClick={toggleMessageList}>
        {isMessageListVisible ? <ChevronRightIcon /> : <ArrowBackIcon />}
      </IconButton>
      <Grid container style={{overflow:"auto"}}>
      <Grid item xs={isSmallerScreen ? 0 : isMessageListVisible ? 4 : 0}>
          <Box sx={{ maxHeight: 500, overflow: 'auto' }}>
            {invoices.map((invoice) => (
              <Paper
              key={invoice._id}
              onClick={() => handleInvoiceClick(invoice)}
              sx={{
                backgroundColor: invoice.read ? '#eee' : 'lightgray',
                padding: 2,
                cursor: 'pointer',
                marginBottom: 1,
              }}
            >
                <Typography variant="subtitle1">{invoice.customerName}</Typography>
                <Typography variant="body2">{invoice.customerEmail}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
        <Grid item xs={isSmallerScreen ? 12 : isMessageListVisible ? 8 : 12}>
          {selectedInvoice && (
            <Paper sx={{ padding: 4 }}>
              <Typography variant="h6">Invoice Details</Typography>
              <Typography variant="subtitle1">Customer Name: {selectedInvoice.customerName}</Typography>
              <Typography variant="subtitle1">Customer Email: {selectedInvoice.customerEmail}</Typography>
              <Typography variant="subtitle1">Motor Make: {selectedInvoice.motorMake}</Typography>
              <Typography variant="subtitle1">Motor Model: {selectedInvoice.motorModel}</Typography>
              <Typography variant="subtitle1">Repair Cost: {selectedInvoice.repairCost}</Typography>
              <Button onClick={markAsRead} variant="contained" color="primary" sx={{ marginRight: 1 }}>
                Mark as Read
              </Button>
              <Button onClick={markAsUnread} variant="contained">
                Mark as Unread
              </Button>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default ViewInvoices;
