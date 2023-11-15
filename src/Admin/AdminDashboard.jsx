import React from 'react';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import RedirectPage from '../hooks/RedirectPage';

function AdminDashboard() {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');

  return isAuthenticated && userRole === 'admin' ? (
    <>
      <ResponsiveAppBar />
      <Container style={{ marginTop: '50px', marginBottom:"150px" }}>
      <Typography variant="h3" align="center">
        ADMIN DASHBOARD
      </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ height: '70vh' }}
        >
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" gutterBottom align="center">
                  View Card
                </Typography>
                <Link to='/viewUsers'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    View Users
                  </Button>
                </Link>
                <Link to='/getMotors'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    View Posted Motors
                  </Button>
                </Link>
                <Link to='/viewInvoices'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    View Invoices
                  </Button>
                </Link>
                <Link to='/viewQuotations'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    View Quotation Requests
                  </Button>
                </Link>
                <Link to='/viewComments'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    View User Comments
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} style={{marginBottom:"100px"}}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" gutterBottom align="center">
                  Other Card
                </Typography>
                <Link to='/postMotors'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    Post Motors
                  </Button>
                </Link>
                <Link to='/postBlog'>
                  <Button variant='contained' fullWidth style={{ marginTop: '10px' }}>
                    Post Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  ):(<div><RedirectPage/></div>)
}

export default AdminDashboard;
