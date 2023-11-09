import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer';
import ResponsiveAppBar from '../../components/AppBar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PostBlog() {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const [errors, setErrors] = useState({
    title: '',
    content: '',
    author: ''
  });

  const [isLoading, setIsLoading]= useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errorDetected = false;
    const newErrors = { ...errors };

    // Check for empty fields
    Object.keys(blogData).forEach((key) => {
      if (!blogData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        errorDetected = true;
      }
    });
  

    if (errorDetected) {
      setErrors(newErrors);
    } else {
        setIsLoading(true)
      try {
        const response = await axios.post('https://rewinders-vgdr.vercel.app/api/post/create', blogData);

        console.log('Blog post submitted:', response.data);
      
        toast.success('Blog post submitted successfully!', {
            position: 'top-right',
            autoClose: 3000, 
          });

        // Clear the form fields on successful submission
        setBlogData({
          title: '',
          content: '',
          author: ''
        });
        setErrors({
          title: '',
          content: '',
          author: ''
        });
        setIsLoading(false)
      } catch (error) {
        console.error('Error submitting blog post:', error);
        toast.error('Error submitting')
        setIsLoading(false)
      }
    }
  };

  const handleInputChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };
  const handleContentChange = (value) => {
    setBlogData({
      ...blogData,
      content: value
    });

    setErrors({
      ...errors,
      content: ''
    });
  };

  return (
    <>
    <ResponsiveAppBar/>
    <Container style={{marginTop:"50px", marginBottom:"100px"}}>
      <Typography>Post a Blog</Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Title"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
          fullWidth
          required
          error={Boolean(errors.title)}
          helperText={errors.title}
          style={{marginTop:"10px"}}
        />
        <TextField
          label="Author"
          name="author"
          value={blogData.author}
          onChange={handleInputChange}
          fullWidth
          required
          error={Boolean(errors.author)}
          helperText={errors.author}
          style={{marginTop:"10px"}}
        />

        <ReactQuill
          theme="snow" // Snow theme is the classic editor
          value={blogData.content}
          onChange={handleContentChange}
          style={{marginTop:"10px", height: '400px'}}
        />
        {isLoading ? (<div><CircularProgress/></div>): (
        <Button type="submit" variant="contained" fullWidth  style={{marginTop:"90px"}}>
          Submit
        </Button>)}
      </form>
      <ToastContainer/>
    </Container>
    <Footer/>
    </>
  );
}

export default PostBlog;
