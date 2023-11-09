import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <>
      <ResponsiveAppBar/>
      <Container style={{marginTop:"50px"}}>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ height: '80vh' }}
        >
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" gutterBottom align="center">
                  Admin Dashboard
                </Typography>
                <Link to='/viewUsers'>
                  <Button variant='contained' fullWidth style={{marginTop:"10px"}}>
                    View Users
                  </Button>
                </Link>
                <Link to='/postMotors'>
                  <Button variant='contained' fullWidth style={{marginTop:"10px"}}>
                    Post Motors
                  </Button>
                </Link>
                <Link to='/getMotors'>
                  <Button variant='contained' fullWidth style={{marginTop:"10px"}}>
                    View Posted Motors
                  </Button>
                </Link>
                <Link to='/viewInvoices'>
                  <Button variant='contained' fullWidth style={{marginTop:"10px"}}>
                    View Invoices
                  </Button>
                </Link>
                <Link to='/postBlog'>
                  <Button variant='contained' fullWidth style={{marginTop:"10px"}}>
                    Post Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}

export default AdminDashboard;
