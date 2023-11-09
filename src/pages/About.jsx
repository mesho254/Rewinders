import React, { useState } from 'react';
import { Container, Typography,Grid, Card, CardContent, TextField, Button, CircularProgress, styled } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Image1 from '../assets/images/control1.jpg'
import Image2 from '../assets/images/istockphoto-1417007340-1024x1024.jpg'
import Image3 from '../assets/images/generator1.png'
import Image4 from '../assets/images/control1.jpg'
import Image5 from '../assets/images/generator2.webp'
import Image6 from '../assets/images/istockphoto-471204065-1024x1024.jpg'
import axios from 'axios';
import '../styles/About.css'

const useStyles = styled((theme) => ({
  companyDescription: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',
    },
  },
  // Other styles can be defined here
}));


const About = () => {
  const motorControls = [
    {
      image: Image1,
      description: '',
    },
    {
      image: Image2,
      description: '',
    },
    {
      image: Image3,
      description: '',
    },
    {
      image: Image4,
      description: '',
    },
    {
      image: Image5,
      description: '',
    },
    {
      image: Image6,
      description: '',
    },
  ];
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false)

  const handleCommentChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
    // Reset error message when user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };


  const handleCommentSubmit = () => {
    let errorDetected = false;
    const newErrors = { ...errors };
  
    // Check for empty fields
    Object.keys(commentData).forEach((key) => {
      if (!commentData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        errorDetected = true;
      }
    });
  
    if (errorDetected) {
      setErrors(newErrors);
    } else {
      // Prepare comment data for submission
      const data = {
        name: commentData.name,
        email: commentData.email,
        comment: commentData.comment,
      };
      setIsLoading(true)
  
      // POST request using Axios to send comment data to the backend
      axios.post('http://localhost:5000/api/comment/create', data)
        .then(response => {
          alert('Comment submitted successfully');
          setCommentData({ name: '', email: '', comment: '' }); // Clear the form after submission
          setIsLoading(false)
        })
        .catch(error => {
          // Handle error, display error message, etc.
          console.error('Error submitting comment:', error);
          alert('Failed to submit comment. Please try again.');
          setIsLoading(false)
        });
    }
  };

    const companyDescription = `
    Welcome to our company! We are a pioneering establishment devoted to delivering a diverse array of superior-quality motors designed for a wide spectrum of applications. Our commitment to excellence and innovation drives us to offer an extensive range of motor types, catering to the intricate and diverse needs of various industries.

    Our company takes pride in its expansive selection, featuring cutting-edge electric motors, robust combustion motors, hydraulic, pneumatic, AC, and DC motors, versatile servo motors, and an array of specialized motor types. Our goal is to ensure we meet the demands of our clientele, providing solutions that underscore reliability, efficiency, and precision.

    With an unwavering focus on customer satisfaction, we not only deliver top-tier products but also offer comprehensive repair services. Our skilled technicians stand ready to breathe new life into your motors, ensuring they operate at peak performance.

    Our dedication extends beyond mere products and services. We aim to forge lasting partnerships, sharing our expertise and knowledge to assist clients in making informed decisions, optimizing their operations, and achieving their goals.

    With a customer-centric approach and a commitment to quality, our company stands as a beacon of trust, reliability, and innovation in the motor industry.
  `;
  return (
    <div>
        <ResponsiveAppBar/>
    <Container style={{marginBottom:"100px", maxWidth:"90%"}}>
        <div>
          <h2>About Our Company</h2>
          <p style={{fontSize:"35px", border:"solid 1px", padding:"40px", color:"blue", maxWidth:"100%"}} className={classes.companyDescription}> {companyDescription}</p>
        </div>
      <Container>
      <h2>About Our Motors</h2>
      <p style={{fontSize:"26px"}} className={classes.companyDescription}>
        We specialize in providing a diverse range of motors tailored to different needs. Our extensive
        collection includes electric motors, combustion motors, hydraulic motors, pneumatic motors, AC motors,
        DC motors, servo motors, linear motors, stepper motors, brushless motors, induction motors, gear motors,
        universal motors, submersible motors, hermetic motors, coreless motors, slotless motors, spindle motors,
        traction motors, and linear induction motors.
      </p>
      </Container>
      <Container style={{marginTop:"50px", borderTop:"4px solid", maxWidth:"90%"}}>
          <Typography variant='h2' style={{margin:"50px 0"}}>All the Services We Offer</Typography>
          <Grid container spacing={3}>
            {motorControls.map((generator, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card style={{height:"400px"}}>
                  <img src={generator.image} alt={`Motor Control ${index}`} style={{ maxWidth: '100%',height:"400px" }} />
                  <CardContent>
                    <Typography>{generator.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>

         {/* Comment section */}
      <Container style={{ marginTop: '50px', maxWidth: '90%' }}>
        <Typography variant="h2" style={{ margin: '50px 0' }}>Comment Section</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <TextField
           label="Name"
           name="name"
           value={commentData.name}
           onChange={handleCommentChange}
           fullWidth
           error={Boolean(errors.name)}
           helperText={errors.name}
           required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
           label="Email"
           name="email"
           value={commentData.email}
           onChange={handleCommentChange}
           fullWidth
           error={Boolean(errors.email)}
           helperText={errors.email}
           required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Comment"
          name="comment"
          value={commentData.comment}
          onChange={handleCommentChange}
          multiline
          rows={4}
          fullWidth
          error={Boolean(errors.comment)}
          helperText={errors.comment}
          required
        />
      </Grid>

          <Grid item xs={12}>
            {isLoading ? (<CircularProgress/>):(
            <Button variant="contained" color="primary" onClick={handleCommentSubmit}>Submit Comment</Button>)}
          </Grid>
        </Grid>
      </Container>

      </Container>
      <Footer/>
    </div>
  );
};

export default About;
