import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(4, 0),
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerSection: {
    margin: theme.spacing(2),
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    cursor:'pointer'
  },
  socialIcon: {
    fontSize: 24,
    marginRight: theme.spacing(1),
  },

   link: {
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {textDecoration: 'underline',},
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{backgroundColor: '#333', color: '#fff', padding: '20px'}}>
      <Container>
        <Grid container className={classes.footerContent}>
          <Grid item xs={12} sm={6} md={4} className={classes.footerSection}>
            <Typography variant="h6" gutterBottom>
            Services
              
            </Typography>
            <Typography variant="body2" paragraph style={{textDecoration: 'none'}}>
            <Link to='/services' style={{cursor: 'pointer' , color: 'green'}}> Our Services</Link>
             
            </Typography>
            <Typography variant="body2" paragraph>
            <Link style={{cursor: 'pointer', color: 'green'}}>Documentations</Link>
              
            </Typography>
            <Typography variant="body2" paragraph>
            <Link style={{cursor: 'pointer' , color: 'green'}}>Opening & Closing Time</Link>
              
            </Typography>
            <Typography variant="body2" paragraph>
            <Link to='/viewMotors' style={{cursor: 'pointer', color: 'green'}}>Available Motors</Link>
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.footerSection}>
            <Typography variant="h6" gutterBottom>
            Important Links
              
            </Typography>
            <Typography variant="body2" paragraph>
            <Link to='/services' className={classes.link} style={{cursor: 'pointer', color: 'green'}}>Services</Link>
              
            </Typography>
            <Typography variant="body2" paragraph>
            <Link to='/pricing' style={{cursor: 'pointer', color: 'green'}}> Pricing</Link>
             
            </Typography>
            <Typography variant="body2" paragraph>
              <Link to='/about' style={{cursor: 'pointer', color: 'green'}}>About</Link>
              
            </Typography>
            <Typography variant="body2" paragraph>
              <Link to='/contacts' style={{cursor: 'pointer', color: 'green'}}>Contacts</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.footerSection}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
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
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
