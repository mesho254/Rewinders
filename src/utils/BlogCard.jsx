import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import Image1 from '../assets/images/control2.jpg'
import ResponsiveAppBar from '../components/AppBar';



const BlogCard = ({ showContent = true,biggerImage = false }) => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
        setIsLoading(true)
      try {
        const response = await axios.get(`https://rewinders-vgdr.vercel.app/api/post/getPost/${id}`);
        setBlog(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch blog details:', error);
        setIsLoading(false)
      }
    };

    fetchBlogDetails();
  }, [id]);

  return isLoading ? (<div><CircularProgress/></div>) :(
    <>
     {showContent && <ResponsiveAppBar />}
    <>
      <Container style={{ marginTop: '20px',  }}>
      <Card>
    <CardMedia
      component="img"
      height={biggerImage ? '700' : '200'}
      image={Image1} // Replace with the actual image URL from your blog data
      alt={blog.title}
    />
    <CardContent>
      {showContent && (
        <>
      <Typography variant="h5" gutterBottom>
       <b> {blog.title}</b> 
      </Typography>
          <Typography variant="caption" color="textSecondary">
           <b>Author: </b> {blog.author}<br/>
          </Typography>
          <Typography variant="caption" color="textSecondary" >
            <b>Date:</b> {new Date(blog.date).toDateString()}<br/>
          </Typography>
        </>
      )}
          <Typography variant="body2" color="textSecondary" component="p" style={{fontWeight:"bold", fontSize:"34px", marginTop:"30px"}}>
            {blog.content}
          </Typography>
    </CardContent>
  </Card>

      </Container>
    </>

    </>
  );
};

export default BlogCard;
