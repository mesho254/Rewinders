import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');
    setIsLoading(true);

    // Validate input fields
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!isValid) {
      setIsLoading(false);
      return;
    }

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
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display an error message)
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Check for the presence of "@" before displaying the error
    if (!isValidEmail(e.target.value) && !e.target.value.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear password error when the user starts typing
    setPasswordError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isValidEmail = (value) => {
    // Simple email validation using a regular expression
    return /\S+@\S+\.\S+/.test(value);
  };

  return (
    <>
      <ResponsiveAppBar />
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
                onChange={handleEmailChange}
                margin="normal"
                required
                error={Boolean(emailError)}
                helperText={emailError}
              />
              <TextField
                label="Password"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
                required
                error={Boolean(passwordError)}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                  style={{ marginTop: '20px' }}
                >
                  Login
                </Button>
              )}
              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <Link to="/signup">Create a new Account</Link>
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
