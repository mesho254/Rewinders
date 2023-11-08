import React from 'react';
import { Container } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';

const About = () => {
    const companyDescription = `
    Welcome to our company! We are a pioneering establishment devoted to delivering a diverse array of superior-quality motors designed for a wide spectrum of applications. Our commitment to excellence and innovation drives us to offer an extensive range of motor types, catering to the intricate and diverse needs of various industries.

    Our company takes pride in its expansive selection, featuring cutting-edge electric motors, robust combustion motors, hydraulic, pneumatic, AC, and DC motors, versatile servo motors, and an array of specialized motor types. Our goal is to ensure we meet the demands of our clientele, providing solutions that underscore reliability, efficiency, and precision.

    With an unwavering focus on customer satisfaction, we not only deliver top-tier products but also offer comprehensive repair services. Our skilled technicians stand ready to breathe new life into your motors, ensuring they operate at peak performance.

    Our dedication extends beyond mere products and services. We aim to forge lasting partnerships, sharing our expertise and knowledge to assist clients in making informed decisions, optimizing their operations, and achieving their goals.

    With a customer-centric approach and a commitment to quality, our company stands as a beacon of trust, reliability, and innovation in the motor industry.
  `;
  return (
    <div>
        <ResponsiveAppBar/>
    <Container style={{marginBottom:"100px"}}>
        <div>
          <h2>About Our Company</h2>
          <p>{companyDescription}</p>
        </div>
      <Container>
      <h2>About Our Motors</h2>
      <p>
        We specialize in providing a diverse range of motors tailored to different needs. Our extensive
        collection includes electric motors, combustion motors, hydraulic motors, pneumatic motors, AC motors,
        DC motors, servo motors, linear motors, stepper motors, brushless motors, induction motors, gear motors,
        universal motors, submersible motors, hermetic motors, coreless motors, slotless motors, spindle motors,
        traction motors, and linear induction motors.
      </p>
      </Container>
      </Container>
      <Footer/>
    </div>
  );
};

export default About;
