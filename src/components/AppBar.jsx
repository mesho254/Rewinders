import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {styled} from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '2rem', // Default font size
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Adjust font size for smaller screens
  },
}));

const pages = [
  { label: 'Home', link: '/' },
  { label: 'Services', link: '/services' },
  { label: 'Pricing', link: '/pricing' },
  { label: 'Blogs', link: '/blogs' },
  { label: 'About', link: '/about' },
  { label: 'Contacts', link: '/contacts' },
];

const settings = [{ label: 'Profile', link: '/profile' }];

// Custom component to wrap <a> element with ref
const AnchorWithRef = React.forwardRef(({ href, children, ...props }, ref) => (
  <a ref={ref} href={href} {...props}>
    {children}
  </a>
));


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useNavigate();

  const userEmail = localStorage.getItem('email');
  const role = localStorage.getItem('role')
  const isAuthenticated = localStorage.getItem('token') !== null;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleAdmin = ()=>{
    history('/adminDashboard')
  }

  const handleNote = ()=>{
    history('/notifications')
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    history('/');
  };



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position={isScrolled ? 'fixed' : 'static'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <ResponsiveTypography
            variant="h6"
            noWrap
            href='/'
            component={AnchorWithRef} 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 7,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           RewindersHub
          </ResponsiveTypography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
             {pages.map((page) => (
    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
      <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
        {page.label}
      </Link>
    </MenuItem>
  ))}
            </Menu>
          </Box>
          <ResponsiveTypography
            variant="h5"
            noWrap
            href='/'
            component={AnchorWithRef}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 7,
              borderRadius: '6px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          RewindersHub
          </ResponsiveTypography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
      <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
        {page.label}
      </Link>
    </MenuItem>
  ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{userEmail[0]}</Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Button color="inherit" onClick={() => history('/login')}>
                Login
              </Button>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             {settings.map((setting) => (
  <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
    <Link to={setting.link} style={{ textDecoration: 'none', color: 'inherit' }}>
      {setting.label}
    </Link>
  </MenuItem>
))}
              {isAuthenticated && role === 'admin' ? (
                 <div>
                 <MenuItem onClick={handleNote}>
                 <Typography textAlign="center">Notifications <NotificationsIcon/></Typography>
                 </MenuItem>
                <MenuItem onClick={handleAdmin}>
                  <Typography textAlign="center">Admin Dashboard</Typography>
                </MenuItem>
                </div>
              ) : null}

              {isAuthenticated ? (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
