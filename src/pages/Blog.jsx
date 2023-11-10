import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card } from '@mui/material';
import BlogCard from '../utils/BlogCard';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Spinner from '../components/spinner';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchBlogData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          'https://rewinders-vgdr.vercel.app/api/post/getAllBlogs'
        );
        setBlogs(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
        setIsLoading(false)
      }
    };

    fetchBlogData();
  }, []);

  return isLoading ? (<div><Spinner/></div>):(
    <>
      <ResponsiveAppBar />
      <Container style={{ marginBottom: '120px', maxWidth:"90%", marginTop:"40px" }}>
        <Typography variant="h3" gutterBottom>
          Recent Blogs
        </Typography>
        {blogs.length === 0 ? (
          <Typography variant="body1" gutterBottom>
            There are no blogs posted yet.
          </Typography>
        ) : (
          
          <Grid container spacing={3}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id}>
                <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none' }}>
                <Card style={{height:"440px"}}>
                <BlogCard blog={blog} biggerImage={false}  showContent={false} />
                  <div style={{marginLeft:"20px"}}>
                    <div style={{marginTop:"10px"}}> <b>{blog.title}</b> </div><br/>
                    <div><b>Author:</b> {blog.author}</div><br/>
                    <div><b>CreatedAt:</b> {new Date(blog.date).toDateString()}</div>
                    </div>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
