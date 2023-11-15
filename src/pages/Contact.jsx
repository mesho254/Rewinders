import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = () => {
  // Sample contact data
  const contacts = [
    { id: 1, name: 'Erick Omondi', phone: '+254 723-876-021', email: 'erickowino10087@gmail.com', fb: "https://www.instagram.com/okelomeshak/", linkedin: "https://www.linkedin.com/in/meshak-otieno-0587201a4/", twitter: "https://twitter.com/di_meshak" },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', phone: '567-890-1234', email: 'bob@example.com' },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container style={{marginTop:"60px", marginBottom:"100px"}}>
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Contacts
          </Typography>
          <Typography variant="body1" gutterBottom>
            Here's a list of contacts available for your use.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Contacts the workers available using the Contacts and Social Media Below
          </Typography>
          <Grid container spacing={3}>
            {contacts.map((contact) => (
              <Grid item key={contact.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {contact.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {contact.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {contact.email}
                    </Typography>
                    <Box mt={2}>
                      <a href={`mailto:${contact.email}`}> 
                      <IconButton style={{ color: '#DB4437' }}>
                        <EmailIcon />
                      </IconButton></a>
                      <a href={contact.fb} target="_blank" rel="noreferrer">               
                      <IconButton style={{ color: '#4267B2' }}>
                        <FacebookIcon />
                      </IconButton></a>  
                    <a href={contact.twitter} target="_blank" rel="noreferrer">
                      <IconButton style={{ color: '#1DA1F2' }}>
                        <TwitterIcon />
                      </IconButton></a>
                      <a href={contact.linkedin} target="_blank" rel="noreferrer">
                      <IconButton style={{ color: '#2867B2' }}>
                        <LinkedInIcon />
                      </IconButton>
                      </a>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        
          <Box mt={3}>
            <Typography variant="h6">Follow us:</Typography>
            <Box>
            <a href='mailto:erickowino10087@gmail.com'>
            <IconButton style={{ color: '#DB4437' }}>
                <EmailIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/okelomeshak/" target="_blank" rel="noreferrer">
              <IconButton style={{ color: '#3b5998' }} >
                <FacebookIcon/>
              </IconButton>
            </a>
            <a href='https://twitter.com/di_meshak' target="_blank" rel="noreferrer">
              <IconButton style={{ color: '#1DA1F2' }}>
                <TwitterIcon />
              </IconButton>
            </a>
              <a href='https://www.linkedin.com/in/meshak-otieno-0587201a4/' target="_blank" rel="noreferrer">
              <IconButton style={{ color: '#2867B2' }}>
                <LinkedInIcon />
              </IconButton>
              </a>
            </Box>
          </Box>
          </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Contacts;
