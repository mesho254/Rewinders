import React, { useState } from 'react';
import { Container, Typography,Grid, TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

function CommentSection() {

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
          axios.post('https://rewinders-vgdr.vercel.app/api/comment/create', data)
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
      
  return (
    <Container style={{ marginTop: '30px', maxWidth:"60%", marginBottom:"50px" }}>
    <Typography variant="h5" style={{ margin: '50px 0' }}>Submit a Comment</Typography>
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
        {isLoading ? (<div><CircularProgress/></div>): (
        <Button variant="contained" color="primary" onClick={handleCommentSubmit}>Submit Comment</Button>)}
      </Grid>
    </Grid>
  </Container>
  )
}

export default CommentSection
