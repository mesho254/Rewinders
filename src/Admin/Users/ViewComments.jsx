import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Paper, Typography, List, ListItem, ListItemText, IconButton, Container, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import RedirectPage from '../../hooks/RedirectPage';

function ViewComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('https://rewinders-vgdr.vercel.app/api/comment/allComments');
      setComments(response.data);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching comments:', error);
      setIsLoading(false)
    }
  };

  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');

  return isAuthenticated && userRole === 'admin' ? (
    <>
      <ResponsiveAppBar />
      <Container>
      <div style={{ padding: '20px' }}>
        <Link to="/adminDashboard">
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '150px' }}>
          <Typography variant="h4" gutterBottom>
            Comments
          </Typography>
          {isLoading ? (<div style={{alignContent:"center"}}><CircularProgress/></div>): (
          <List>
            {comments.map((comment) => (
              <ListItem key={comment._id} style={{ borderBottom: '1px solid' }}>
                <ListItemText
                  primary={comment.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {comment.email}
                      </Typography>
                      <br />
                      {comment.comment}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>)}
        </Paper>
      </div>
      </Container>
      <Footer />
    </>
  ): (<div><RedirectPage/></div>)
}

export default ViewComments;
