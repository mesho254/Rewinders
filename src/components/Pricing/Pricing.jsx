import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Button } from '@mui/material';
import ResponsiveAppBar from '../AppBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const motorsData = [
  {
    type: 'Electric Motor',
    buyPrice: 'KSH 50,000 - KSH 70,000',
    sellPrice: 'KSH 40,000 - KSH 60,000',
    repairPrice: 'KSH 10,000 - KSH 20,000',
  },
  {
    type: 'Combustion Motor',
    buyPrice: 'KSH 70,000 - KSH 90,000',
    sellPrice: 'KSH 60,000 - KSH 80,000',
    repairPrice: 'KSH 15,000 - KSH 25,000',
  },
  {
    type: 'Hydraulic Motor',
    buyPrice: 'KSH 90,000 - KSH 110,000',
    sellPrice: 'KSH 80,000 - KSH 100,000',
    repairPrice: 'KSH 20,000 - KSH 30,000',
  },
  {
    type: 'Pneumatic Motor',
    buyPrice: 'KSH 80,000 - KSH 100,000',
    sellPrice: 'KSH 70,000 - KSH 90,000',
    repairPrice: 'KSH 18,000 - KSH 28,000',
  },
  {
    type: 'AC Motor',
    buyPrice: 'KSH 75,000 - KSH 95,000',
    sellPrice: 'KSH 65,000 - KSH 85,000',
    repairPrice: 'KSH 17,000 - KSH 27,000',
  },
  {
    type: 'DC Motor',
    buyPrice: 'KSH 85,000 - KSH 105,000',
    sellPrice: 'KSH 75,000 - KSH 95,000',
    repairPrice: 'KSH 20,000 - KSH 30,000',
  },
  {
    type: 'Servo Motor',
    buyPrice: 'KSH 95,000 - KSH 115,000',
    sellPrice: 'KSH 85,000 - KSH 105,000',
    repairPrice: 'KSH 22,000 - KSH 32,000',
  },
  {
    type: 'Linear Motor',
    buyPrice: 'KSH 100,000 - KSH 120,000',
    sellPrice: 'KSH 90,000 - KSH 110,000',
    repairPrice: 'KSH 25,000 - KSH 35,000',
  },
  {
    type: 'Stepper Motor',
    buyPrice: 'KSH 110,000 - KSH 130,000',
    sellPrice: 'KSH 100,000 - KSH 120,000',
    repairPrice: 'KSH 28,000 - KSH 38,000',
  },
  {
    type: 'Brushless Motor',
    buyPrice: 'KSH 120,000 - KSH 140,000',
    sellPrice: 'KSH 110,000 - KSH 130,000',
    repairPrice: 'KSH 30,000 - KSH 40,000',
  },
  {
    type: 'Induction Motor',
    buyPrice: 'KSH 100,000 - KSH 120,000',
    sellPrice: 'KSH 90,000 - KSH 110,000',
    repairPrice: 'KSH 25,000 - KSH 35,000',
  },
  {
    type: 'Gear Motor',
    buyPrice: 'KSH 105,000 - KSH 125,000',
    sellPrice: 'KSH 95,000 - KSH 115,000',
    repairPrice: 'KSH 27,000 - KSH 37,000',
  },
  {
    type: 'Universal Motor',
    buyPrice: 'KSH 115,000 - KSH 135,000',
    sellPrice: 'KSH 105,000 - KSH 125,000',
    repairPrice: 'KSH 28,000 - KSH 38,000',
  },
  {
    type: 'Submersible Motor',
    buyPrice: 'KSH 125,000 - KSH 145,000',
    sellPrice: 'KSH 115,000 - KSH 135,000',
    repairPrice: 'KSH 32,000 - KSH 42,000',
  },
  {
    type: 'Hermetic Motor',
    buyPrice: 'KSH 130,000 - KSH 150,000',
    sellPrice: 'KSH 120,000 - KSH 140,000',
    repairPrice: 'KSH 35,000 - KSH 45,000',
  },
  {
    type: 'Coreless Motor',
    buyPrice: 'KSH 140,000 - KSH 160,000',
    sellPrice: 'KSH 130,000 - KSH 150,000',
    repairPrice: 'KSH 37,000 - KSH 47,000',
  },
  {
    type: 'Slotless Motor',
    buyPrice: 'KSH 150,000 - KSH 170,000',
    sellPrice: 'KSH 140,000 - KSH 160,000',
    repairPrice: 'KSH 40,000 - KSH 50,000',
  },
  {
    type: 'Spindle Motor',
    buyPrice: 'KSH 160,000 - KSH 180,000',
    sellPrice: 'KSH 150,000 - KSH 170,000',
    repairPrice: 'KSH 45,000 - KSH 55,000',
  },
  {
    type: 'Traction Motor',
    buyPrice: 'KSH 120,000 - KSH 140,000',
    sellPrice: 'KSH 110,000 - KSH 130,000',
    repairPrice: 'KSH 25,000 - KSH 35,000',
  },
  {
    type: 'Linear Induction Motor',
    buyPrice: 'KSH 150,000 - KSH 170,000',
    sellPrice: 'KSH 140,000 - KSH 160,000',
    repairPrice: 'KSH 30,000 - KSH 40,000',
  },
];

const Pricing = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Container style={{maxWidth:"90%", marginBottom:"100px"}}>
      <h2>Motor Pricing</h2>
      <Grid container spacing={2}>
        {motorsData.map((motor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {motor.type}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Buying Price Range:</strong> {motor.buyPrice}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Selling Price Range:</strong> {motor.sellPrice}
                </Typography>
                <Typography variant="body1">
                  <strong>Repair Price Range:</strong> {motor.repairPrice}
                </Typography>
                {motor.type === 'Electric Motor' && (
                  <Button component={Link} to="/electric-motors">
                    View Electric Motors
                  </Button>
                )}
                {motor.type === 'Combustion Motor' && (
                  <Button component={Link} to="/combustion-motors">
                    View Combustion Motors
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default Pricing;
