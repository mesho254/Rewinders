import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  CircularProgress,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResponsiveAppBar from '../../components/AppBar';
import {Link} from 'react-router-dom'
import RedirectPage from '../../hooks/RedirectPage';

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://rewinders-vgdr.vercel.app/api/user/users');
        setUsers(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setIsLoading(false)
      }
    };

    fetchUsers();
  }, []);

  const isAuthenticated = localStorage.getItem('token') !== null;
  const userRole = localStorage.getItem('role');

  return isAuthenticated && userRole === 'admin' ? (
    <div>
        <ResponsiveAppBar/>
        <Container style={{marginTop:"50px"}}>
        <Link to="/adminDashboard">
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
      <Typography variant="h2" gutterBottom alignItems={'center'}>
        User Details
      </Typography>
      {isLoading ? (<div><CircularProgress/></div>): (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,index) => (
              <TableRow key={(index + 1)}>
                <TableCell>{index}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)}
      </Container>
    </div>
  ):(<div><RedirectPage/></div>)
}

export default ViewUsers;
