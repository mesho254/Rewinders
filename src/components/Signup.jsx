import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/AppBar';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  marginBottom: '100px',
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('admin');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [emptyFieldErrors, setEmptyFieldErrors] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  });

const [isLoading, setIsLoading] = useState(false)

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+/;

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegister = async () => {
    const newEmptyFieldErrors = {
      email: !email,
      password: !password,
      firstName: !firstName,
      lastName: !lastName,
    };

    setEmptyFieldErrors(newEmptyFieldErrors);

    if (Object.values(newEmptyFieldErrors).some((fieldError) => fieldError)) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!passwordPattern.test(password)) {
      setError('Password should contain at least one uppercase letter, one number, and one special character.');
      return;
    }
    setIsLoading(true)
    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        role,
        gender,
      };

      const response = await axios.post('https://college-dashboard-dusky.vercel.app/api/user/register', userData);

      if (response.status === 201) {
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000,
        });

        // Clear the form fields on successful registration
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setRole('admin');
        setEmptyFieldErrors({
          email: false,
          password: false,
          firstName: false,
          lastName: false,
        });
        setIsLoading(false)
        setError('')
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    }
  };

  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');
  return isAuthenticated && userRole === 'admin' ? (
    <>
      <ResponsiveAppBar />

      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: '30px', marginTop: '50px', marginBottom: '150px' }}>
          <div>
            <Typography variant="h5">User Registration</Typography>
            <form>
              <TextField
                type="firstName"
                label="FirstName"
                fullWidth
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setEmptyFieldErrors({ ...emptyFieldErrors, firstName: false });
                }}
                margin="normal"
                required
                error={emptyFieldErrors.firstName}
              />
              <TextField
                type="lastName"
                label="lastName"
                fullWidth
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setEmptyFieldErrors({ ...emptyFieldErrors, lastName: false });
                }}
                margin="normal"
                required
                error={emptyFieldErrors.lastName}
              />
              <FormControl component="fieldset" margin="normal" required>
                <Typography variant="h5">Choose user Role</Typography>
                <RadioGroup
                  aria-label="Role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  row
                  style={{ marginTop: '16px' }}
                >
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <TextField
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmptyFieldErrors({ ...emptyFieldErrors, email: false });
                }}
                margin="normal"
                required
                error={emptyFieldErrors.email}
              />
              <TextField
                type="password"
                label="Password (Should contain at least one uppercase and character"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setEmptyFieldErrors({ ...emptyFieldErrors, password: false });
                }}
                margin="normal"
                required
                error={emptyFieldErrors.password}
              />
              <FormControl component="fieldset" margin="normal" required>
                <Typography variant="h5">Choose Gender</Typography>
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  row
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>

              {isLoading ? ( // Show loading indicator when loading
              <CircularProgress style={{ marginTop: '16px' }} />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleRegister}
                fullWidth
                style={{ marginTop: '16px' }}
              >
                Register
              </Button>)}
              <Link to="/home">
                <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
                  BACK TO DASHBOARD
                </Button>
              </Link>
            </form>
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </div>
          <ToastContainer />
        </Paper>
      </Container>
      <Footer />
    </>
  ) : (
    <div style={containerStyle}>
      <h1>Login as an admin first</h1>
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default Signup;
