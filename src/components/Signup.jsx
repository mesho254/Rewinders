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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/AppBar';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [emptyFieldErrors, setEmptyFieldErrors] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  });

const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate()

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
        gender,
      };

      const response = await axios.post('https://rewinders-vgdr.vercel.app/api/user/register', userData);

      if (response.status === 201) {
        let countdown = 5; // Countdown time in seconds
        const countdownInterval = setInterval(() => {
          countdown -= 1;
          if (countdown > 0) {
            toast.success(`Registration successful! Redirecting to login page in ${countdown} seconds`, {
              position: 'top-right',
              autoClose: 1000, // Set the autoClose time to 1 second
              hideProgressBar: true,
            });
          }
        }, 1000);

        setTimeout(() => {
          clearInterval(countdownInterval);
          navigate('/login'); 
        }, countdown * 1000);

        // Clear the form fields on successful registration
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
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
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
      setIsLoading(false)
    }
  };

  return (
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
              <Typography style={{marginTop:"10px"}}>Already have an Account?
              <Link to='/login'>Login</Link></Typography>
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
  );
    
};

export default Signup;
