import * as React from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from "../context/AuthContext";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const pages = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'About', link: '/about' }, 
    { label: 'Contacts', link: '/contacts' },
    { label: 'Profile', link: '/profile' },
];
const settings = ['Logout'];

// Mock data for search
const mockData = [
    { id: 1, name: 'Result 1' },
    { id: 2, name: 'Result 2' },
    { id: 3, name: 'Result 3' },
    // Add more data as needed
  ];
  
  // Simulated search function
  const performSearch = (searchQuery) => {
    const results = mockData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(results);
      }, 1000);
    });
  };
  
//   // Custom component to wrap <a> element with ref
//   const AnchorWithRef = React.forwardRef(({ href, children, ...props }, ref) => (
//     <a ref={ref} href={href} {...props}>
//       {children}
//     </a>
//   ));
  
  // Inside the component:
  const ClearIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: theme.spacing(1),
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: theme.palette.action.active,
  }));
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')({
    padding: (theme) => theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

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

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {logout,currentUser, loading} = useAuth();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);


  const toggleLogin = async () => {
    navigate('/login')
  }
  // handle logout
  const navigate = useNavigate()
  const handleSignOut = async() => {
      await logout()
      navigate('/')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      const results = await performSearch(searchQuery);
      setSearchResults(results);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return  loading ? (
    <div>loading ...</div>
  ) : (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ResponsiveTypography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           RewindingHub
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
                  <Link to={page.link} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RewindingHub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
              {/* Add the Search Bar */}
              <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Search">
                 <Search>
                   <SearchIconWrapper>
                     <SearchIcon />
                   </SearchIconWrapper>
                   <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                     value={searchQuery}
                     onChange={handleSearchInputChange}
                     onKeyUp={(e) => {
                       if (e.key === 'Enter') {
                         handleSearch();
                       }
                     }}
                   />
                   {searchQuery && (
                     <ClearIconWrapper onClick={handleClearSearch}>
                       <ClearIcon />
                     </ClearIconWrapper>
                   )}
                   {searchResults.length > 0 && (
                     <div>
                       <ul>
                         {searchResults.map((result) => (
                           <li key={result.id}>{result.name}</li>
                         ))}
                       </ul>
                     </div>
                   )}
                 </Search>
               </Tooltip>
             </Box>
          <Box sx={{ flexGrow: 0 }}>

          {currentUser ? (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="">{currentUser.email[0]}</Avatar>
              </IconButton>
            </Tooltip>
            ) : (<div>
                <Button color='secondary' variant='contained' onClick={toggleLogin}>Login</Button>
                 </div>)}
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleSignOut}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;