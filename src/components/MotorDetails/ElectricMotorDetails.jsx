import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import ResponsiveAppBar from '../AppBar';
import Footer from '../Footer';


const ElectricMotorDetails = () => {
  const motors = [
    {
      motorMake: "AVKF Motors",
      motorModel: "HTG Model",
      year: 2022,
      type: "Type XYZ",
      voltage: "220V",
      horsepower: "10 HP",
      speed: "1200 RPM",
      coolingSystem: "Air-cooled",
      weight: "50 kg",
      dimensions: "10x15x20 inches",
      condition: "New",
      phase: "Single",
      frequency: "60 Hz",
      Price: "KSH 60000",
    },
    {
        motorMake: "UTY Motors",
        motorModel: "POL Model",
        year: 2020,
        type: "Type T5R",
        voltage: "290V",
        horsepower: "15 HP",
        speed: "1500 RPM",
        coolingSystem: "Back-fan",
        weight: "70 kg",
        dimensions: "10x15x20 inches",
        condition: "Used",
        phase: "Three Phase",
        frequency: "80 Hz",
        Price: "KSH 100000"
      },
  ];

  return (
    <>
    <ResponsiveAppBar/>
    <Container style={{maxWidth:"80%",marginBottom:"100px", marginTop:"40px" }}>
        <Typography variant='h4' gutterBottom>View Different Types of Electric Motors</Typography>
    <Grid container spacing={3}>
      {motors.map((motor, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {motor.motorMake} - {motor.motorModel}
              </Typography>
              <Typography variant="body2">
                <strong>Type:</strong> {motor.type}
              </Typography>
              <Typography variant="body2">
                <strong>Year:</strong> {motor.year}
              </Typography>
              <Typography variant="body2">
                <strong>Details:</strong>
                <ul>
                  <li><strong>Voltage:</strong> {motor.voltage}</li>
                  <li><strong>Horsepower:</strong> {motor.horsepower}</li>
                  <li><strong>Speed:</strong> {motor.speed}</li>
                  <li><strong>Cooling System:</strong> {motor.coolingSystem}</li>
                  <li><strong>Weight:</strong> {motor.weight}</li>
                  <li><strong>Dimensions:</strong> {motor.dimensions}</li>
                  <li><strong>Condition:</strong> {motor.condition}</li>
                  <li><strong>Phase:</strong> {motor.phase}</li>
                  <li><strong>Frequency:</strong> {motor.frequency}</li>
                </ul>
                  <h2 style={{color:"green"}}><b>Price:{motor.Price}</b></h2>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default ElectricMotorDetails;
