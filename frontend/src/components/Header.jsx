import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Wedding', 'Schedule', 'Our Story', 'Q&A', 'RSVP'];

function ResponsiveHeader({ theme, setOpenRSVP }) {
  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpenMobileMenu = (e) => {
    setAnchorNav(e.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    // page is on of 'Wedding', 'Our Story', 'FAQ', 'Registry' now
    setAnchorNav(null);
  };

  // handle the clicking of RSVP to send to modal dialog
  const handleRSVPOpen = () => {
    setOpenRSVP(true);
  };

  // code from https://github.com/mui/material-ui/blob/v5.16.4/docs/data/material/getting-started/templates/landing-page/components/AppAppBar.js
  const scrollToSection = (sectionId) => {
    // RSVP isn't a new page but rather a modal dialog
    if (sectionId === 'RSVP') {
      handleRSVPOpen();
    } else {
      const sectionElement = document.getElementById(sectionId);
      const offset = 128;
      if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset;
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
      }
    }
  };

  const white = theme.palette.whites.lightWhite;

  return (
    <AppBar position='sticky'>
      <Container maxWidth='false'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: white,
              textDecoration: 'none',
            }}
          >
            Abby & Andrew
          </Typography>

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className='icon'
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenMobileMenu}
              color={white}
              sx={{ color: white }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={() => handleCloseNavMenu('here')}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: { white },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => scrollToSection(page)}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: white,
              textDecoration: 'none',
            }}
          >
            Ab & Anj
          </Typography>
          {/* Desktop View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => scrollToSection(page)}
                sx={{
                  my: 2,
                  color: white,
                  display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveHeader;
