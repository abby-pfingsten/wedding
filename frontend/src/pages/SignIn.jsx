import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import background from '../images/wedding-background.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BackgroundDiv = styled('div')({
  height: '100vh',
  width: '100%',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  filter: 'saturate(30%)',
});

export default function SignIn({ theme, setHide }) {
  // navigate to home page
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  // handle a user submitting the password
  const handleSubmit = (e) => {
    e.preventDefault();

    // wasn't there a different way to do this?
    const passwordElement = document.getElementById('password');
    const passwordValue = passwordElement.value;

    if (
      passwordValue.toUpperCase() === 'MEELOISKING' ||
      passwordValue.toUpperCase() === 'ADMINPASS'
    ) {
      navigate('/');
      setError(false);
      localStorage.setItem('loggedInUser', JSON.stringify(true));

      // if the person using the app is a recruiter we want to hide
      // specific information
      if (passwordValue.toUpperCase() === 'ADMINPASS') {
        localStorage.setItem('hideInfo', JSON.stringify(true));
        setHide(true);
      } else {
        localStorage.setItem('hideInfo', JSON.stringify(false));
        setHide(false);
      }
    } else {
      setError(true);
      localStorage.setItem('loggedInUser', JSON.stringify(false));
    }
  };

  const themeDarkWhite = theme.palette.whites.darkWhite;

  return (
    <BackgroundDiv>
      <Container component='main' maxWidth='xl'>
        <CssBaseline>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={3}
          >
            <Grid
              item
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                sx={{ fontSize: { xs: 35, md: 75 }, textAlign: 'center' }}
                color={themeDarkWhite}
              >
                The Wedding of Abby and Andrew{' '}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <TextField
                sx={{ width: { md: '40%' } }}
                fullWidth
                id='password'
                label='Please enter the super secret password'
                variant='standard'
              />{' '}
              {error ? (
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    WebkitTextStroke: 'white',
                  }}
                  // color={themeDarkWhite}
                  color='#E60023'
                >
                  Wrong password!!
                </Typography>
              ) : (
                <></>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Button onClick={handleSubmit} size='large' variant='contained'>
                Enter
              </Button>
            </Grid>{' '}
          </Grid>
        </CssBaseline>
      </Container>
    </BackgroundDiv>
  );
}
