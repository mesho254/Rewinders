import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        position: 'fixed', // Fixed position
        bottom: 0, // Positioned at the bottom of the viewport
        width: '100%', // Full width
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2023 RewindersHub. All Rights Reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Made with ❤️ by <Link href="https://www.github.com/mesho254">Mesho254</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
