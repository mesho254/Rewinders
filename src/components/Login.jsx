import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send a POST request to your authentication endpoint (e.g., /auth/login)
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });
  
      const { token } = response.data;
  
      // Decode the JWT token to get user role
      const decodedToken = jwtDecode(token);
  
      if (decodedToken.role === 'rewinder') {
        // Redirect to the home page for drivers
        history('/');
      } else if (decodedToken.role === 'admin') {
        // Redirect to the admin dashboard
        history('/admin-dashboard');
      }
  
      // Store the token, email, and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', decodedToken.role);
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display an error message)
    }
  };
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Password"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
