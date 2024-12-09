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

export default function SignIn() {
  // navigate to home page
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  // handle a user submitting the password
  const handleSubmit = (e) => {
    e.preventDefault();

    // wasn't there a different way to do this?
    const passwordElement = document.getElementById('password');
    const passwordValue = passwordElement.value;

    if (passwordValue.toUpperCase() === 'MEELOISKING') {
      navigate('/');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <BackgroundDiv>
      <Container component='main' maxWidth='xl'>
        <CssBaseline>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            gap={10}
            spacing={2}
          >
            <Grid
              item
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                sx={{ fontSize: { xs: 35, md: 75 }, textAlign: 'center' }}
                color={'white'}
              >
                The Wedding of Abby and Andrew{' '}
              </Typography>
              {/* <Typography color={'white'}>Abby and Andrew</Typography> */}
            </Grid>
            {/* <Grid
              item
              xs={12}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography color={'white'}>Abby and Andrew</Typography>
            </Grid> */}
            <Grid
              item
              xs={12}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <TextField
                sx={{ width: { md: '40%' } }}
                fullWidth
                id='password'
                label='Please enter the phrase here'
                variant='standard'
              />{' '}
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
              {/* <Grid>
                {' '}
                {error ? <Typography>oops! wrong password!</Typography> : <></>}
              </Grid> */}
            </Grid>{' '}
          </Grid>
        </CssBaseline>
      </Container>
    </BackgroundDiv>
  );
}
