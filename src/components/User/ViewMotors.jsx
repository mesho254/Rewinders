import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Button, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField, } from '@mui/material';
import Spinner from '../spinner';
import Footer from '../Footer';
import ResponsiveAppBar from '../AppBar';

const ViewMotors = () => {
  const [motors, setMotors] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMotor, setSelectedMotor] = useState(null);
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: '',
    date: '',
    customerName: '',
    customerEmail: '',
    customerAddress: '',
    repairDetails: '',
    repairCost: '',
  });
  

  useEffect(() => {
    const fetchMotors = async () => {
        setIsLoading(true)
      try {
        const response = await axios.get('https://rewinders-vgdr.vercel.app/api/motor/getAllMotors');
        setMotors(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch motors:', error);
        setIsLoading(false)
      }
    };

    fetchMotors();
  }, []);

  const handleBuyMotor = (motor) => {
    setSelectedMotor(motor);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (field, value) => {
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return isLoading ? (<Spinner/>) : (
    <>
    <ResponsiveAppBar/>
    <Container>
      <h1>All Motors</h1>
      <Grid container spacing={3}>
        {motors.map((motor) => (
          <Grid item xs={12} sm={6} md={4} key={motor._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Make: {motor.make}
                </Typography>
                <Typography variant="h5" component="h2">
                  Model: {motor.model}
                </Typography>
                <Typography color="textSecondary">
                  Year: {motor.year}
                </Typography>
                <Typography color="textSecondary">
                  Type: {motor.type}
                </Typography>
                <Typography color="textSecondary">
                  Voltage: {motor.voltage}
                </Typography>
                <Typography color="textSecondary">
                  Horsepower: {motor.horsepower}
                </Typography>
                <Typography color="textSecondary">
                  Speed: {motor.speed}
                </Typography>
                <Typography color="textSecondary">
                  Cooling System: {motor.coolingSystem}
                </Typography>
                <Typography color="textSecondary">
                  Weight: {motor.weight}
                </Typography>
                <Typography color="textSecondary">
                  Dimensions: {motor.dimensions}
                </Typography>
                <Typography color="textSecondary">
                  Condition: {motor.condition}
                </Typography>
                <Typography color="textSecondary">
                  Phase: {motor.phase}
                </Typography>
                <Typography color="textSecondary">
                  Frequency: {motor.frequency}
                </Typography>
              </CardContent>
             
              <Button
                  variant='contained'
                  color='secondary'
                  style={{ margin: '10px 5px' }}
                  onClick={() => handleBuyMotor(motor)} // Pass the selected motor to the handler
                >
                  Buy Motor
                </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

       {/* Invoice Details Dialog */}
       <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Enter Invoice Details</DialogTitle>
        <DialogContent>
          <TextField
            label='Make'
            value={selectedMotor ? selectedMotor.make : ''}
            disabled
            fullWidth
            margin='normal'
          />
          <TextField
            label='Model'
            value={selectedMotor ? selectedMotor.model : ''}
            disabled
            fullWidth
            margin='normal'
          />
          <TextField
            label='Customer Name'
            fullWidth
            margin='normal'
            value={invoiceDetails.customerName}
            onChange={(e) => handleInputChange('customerName', e.target.value)}
          />
          <TextField
            label='Customer Email'
            fullWidth
            margin='normal'
            value={invoiceDetails.customerEmail}
            onChange={(e) => handleInputChange('customerEmail', e.target.value)}
          />
          <TextField
            label='Customer Address'
            fullWidth
            margin='normal'
            value={invoiceDetails.customerAddress}
            onChange={(e) => handleInputChange('customerAddress', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color='primary'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    <Footer/>
    </>
  );
};

export default ViewMotors;
