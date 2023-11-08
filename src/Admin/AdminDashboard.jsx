import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <>
      <ResponsiveAppBar/>
      <Container>
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
                  <Button variant='contained' fullWidth>
                    View Users
                  </Button>
                </Link>
                <Link to='/postMotors'>
                  <Button variant='contained' fullWidth>
                    Post Motors
                  </Button>
                </Link>
                <Link to='/getMotors'>
                  <Button variant='contained' fullWidth>
                    View Posted Motors
                  </Button>
                </Link>
                <Link to='/viewInvoices'>
                  <Button variant='contained' fullWidth>
                    View Invoices
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
