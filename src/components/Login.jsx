import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      // Send a POST request to your authentication endpoint (e.g., /auth/login)
      const response = await axios.post('https://rewinders-vgdr.vercel.app/api/user/login', {
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
        history('/');
      }
  
      // Store the token, email, and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', decodedToken.role);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display an error message)
      setIsLoading(false)
    }
  };
  return (<>
  <ResponsiveAppBar/>
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
            {isLoading ? (<CircularProgress/>):(
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>)}
            <div style={{padding:"10px", display:"flex", flexDirection:"column"}}>
            <Link to='/signup'>Create a new Account</Link>
            <Link to='/forgotPassword'>Forgot Password?</Link>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default Login;
