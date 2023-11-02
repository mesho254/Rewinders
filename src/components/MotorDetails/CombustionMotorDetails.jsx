import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CombustionMotorDetails = () => {
  const motors = [
    {
      motorMake: "KING Motors",
      motorModel: "CTR Model",
      year: 2022,
      type: "Type JFK",
      voltage: "250V",
      horsepower: "20 HP",
      speed: "1280 RPM",
      coolingSystem: "Fan-cooled",
      weight: "70 kg",
      dimensions: "10x15x20 inches",
      condition: "Used",
      phase: "Three Phase",
      frequency: "80 Hz"
    },
    // Add details for other motors here...
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {motors.map((motor, index) => (
        <Card key={index} style={{ width: '300px', margin: '10px' }}>
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
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CombustionMotorDetails;
