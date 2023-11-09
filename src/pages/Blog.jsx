import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Container, Typography } from '@mui/material';
import Image1 from '../assets/images/control1.jpg'
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from an API
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/post/getAllBlogs'); // Replace the URL with your actual API endpoint
        setBlogs(response.data); // Assuming response.data is an array of blog posts
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
      }
    };

    fetchBlogData();
  }, []); // Empty dependency array ensures it only runs once after the initial render

  return (
    <>
    <ResponsiveAppBar/>
    <Container style={{marginBottom:"120px"}}>
      <Typography variant="h3" gutterBottom>
        Blog Posts
      </Typography>
      {blogs.length === 0 ? (
        <Typography variant="body1" gutterBottom>
          There are no blogs posted yet.
        </Typography>
      ) : (
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={Image1} // Replace 'blog.image' with the actual image URL
                alt={blog.title} // Assuming 'title' is a field in the blog data
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.content}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Author: {blog.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>)}
    </Container>
    <Footer/>
    </>
  );
}

export default Blog;
