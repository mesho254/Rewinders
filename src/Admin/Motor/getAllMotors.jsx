import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const AllMotors = () => {
  const [motors, setMotors] = useState([]);

  useEffect(() => {
    const fetchMotors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/motor/getAllMotors');
        setMotors(response.data);
      } catch (error) {
        console.error('Failed to fetch motors:', error);
      }
    };

    fetchMotors();
  }, []);

  return (
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllMotors;
