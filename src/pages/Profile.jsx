import React from 'react';
import UpdateEmail from '../components/UpdateEmail';
import { AvatarUser, AvatarText } from '../styles/Profile';
import { useAuth } from '../context/AuthContext';
import ResponsiveAppBar from '../components/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import  Spinner  from '../components/spinner';

export default function Profile() {
  const { currentUser, loading } = useAuth();

  if (loading) return <Spinner/>;

  return (
    <div>
      <ResponsiveAppBar />
      <Container
        maxWidth="xs" // Set the maximum width of the container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center content horizontally
          backgroundColor: '#f0f0f0', // Background color
          borderRadius: '8px', // Border radius
          padding: '40px', // Add some padding for spacing
          marginTop: '20px', // Add margin from the top
        }}
      >
        <AvatarUser style={{marginBottom: '100px', marginRight: '100px'}}>
          <AvatarText>{currentUser.email[0]}</AvatarText>
        </AvatarUser>
        <Typography variant="h5" gutterBottom>
          User Email: {currentUser.email}
        </Typography>
        <UpdateEmail />
      </Container>
    </div>
  );
}


