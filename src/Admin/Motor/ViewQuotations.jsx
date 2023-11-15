import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

function ViewQuotations() {
  const [quotations, setQuotations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    try {
      const response = await axios.get('https://rewinders-vgdr.vercel.app/api/quotation/all');
      setQuotations(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching quotations:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '150px' }}>
          <Typography variant="h4" gutterBottom>
            Quotations
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <List>
              {quotations.map((quotation) => (
                <ListItem key={quotation._id} style={{ borderBottom: '1px solid' }}>
                  <ListItemText
                    primary={`Customer: ${quotation.customerName}`}
                    secondary={
                      <>
                        <Typography component="div" variant="body2" color="text.primary">
                          <div>Email: {quotation.customerEmail}</div>
                          <div>Address: {quotation.customerAddress}</div>
                          <div>Message: {quotation.message}</div>
                          <div>Date: {new Date(quotation.date).toLocaleDateString()}</div>
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </div>
      <Footer />
    </>
  );
}

export default ViewQuotations;
