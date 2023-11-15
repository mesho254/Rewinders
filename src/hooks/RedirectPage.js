import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';

const RedirectPage = () => {
  const history = useNavigate();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect the user to the login page after 3 seconds
    setTimeout(() => {
      clearInterval(timer);
      history('/login');
    }, 4000);

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, [history]);

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}
    >
      <CircularProgress style={{ marginBottom: '20px' }} />
      <Typography variant="h5" align="center">
        You should Login First to access this Page!
        Redirecting to Login in {countdown} seconds...
      </Typography>
    </Container>
  );
};

export default RedirectPage;
