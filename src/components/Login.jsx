import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, IconButton } from '@mui/material';
import Spinner from '../components/spinner';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login, loading } = useAuth(); // Access the login function from the hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useNavigate()
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(email, password); // Use the login function
        history('/')
      } catch (error) {
        console.error(error.message);
      }
    };
    return loading ? (
      <Spinner/>
    ) :( 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container maxWidth="xs" style={{ margin: '20px' , border:'1px solid', padding: '30px', borderRadius: '6px'}}>
        <Typography variant="h3">Login Here</Typography>
        <form>
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            type={showPassword ? 'text' : 'password'} 
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
        <Link to="/reset-password" style={{marginTop:'25px'}}>Forgot Password?</Link><br/>
        <Link to="/signup" style={{marginTop:'25px'}}>Don't have an account? Create Here</Link>
      </Container>
    </div>
  );
};

export default Login;
