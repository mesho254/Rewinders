import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  IconButton,
  Container,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import RedirectPage from '../../hooks/RedirectPage';

function ViewInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isMessageListVisible, setMessageListVisibility] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchInvoices = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://rewinders-vgdr.vercel.app/api/invoices/allInvoices');
        const updatedInvoices = response.data.map((invoice) => ({ ...invoice, read: false }));
        setInvoices(updatedInvoices);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch invoices:', error);
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const fetchUpdatedInvoices = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://rewinders-vgdr.vercel.app/api/invoices/allInvoices');
      setInvoices(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch updated invoices:', error);
      setIsLoading(false);
    }
  };

  const markAsRead = async () => {
    try {
      await axios.patch(`https://rewinders-vgdr.vercel.app/api/invoices/updateStatus/${selectedInvoice._id}`, {
        read: true,
      });
      fetchUpdatedInvoices();
      handleDialogClose();
    } catch (error) {
      console.error('Failed to mark invoice as read:', error);
    }
  };

  const markAsUnread = async () => {
    try {
      await axios.patch(`https://rewinders-vgdr.vercel.app/api/invoices/updateStatus/${selectedInvoice._id}`, {
        read: false,
      });
      fetchUpdatedInvoices();
      handleDialogClose();
    } catch (error) {
      console.error('Failed to mark invoice as unread:', error);
    }
  };

  const toggleMessageList = () => {
    setMessageListVisibility(!isMessageListVisible);
  };

  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');

  return isAuthenticated && userRole === 'admin' ? (
    <>
      <ResponsiveAppBar />
      <Container style={{ marginBottom: '120px', marginTop: '50px' }}>
      <Link to="/adminDashboard">
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            All Invoices
          </Typography>
          <IconButton onClick={toggleMessageList}>
            {isMessageListVisible ? <ChevronRightIcon /> : <ArrowBackIcon />}
          </IconButton>
          <Grid container style={{ overflow: 'auto' }}>
            {isLoading ? (
              <div>
                <CircularProgress />
              </div>
            ) : (
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
            )}
            {isLoading ? (
              <div>
                <CircularProgress />
              </div>
            ) : (
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
            )}
          </Grid>
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Invoice Message</DialogTitle>
            <DialogContent>
              <Typography variant="body1">Your message goes here.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
      <Footer />
    </>
  ):(<div><RedirectPage/></div>)
}

export default ViewInvoices;
