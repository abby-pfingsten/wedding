import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import winery from '../images/winery-stock.jpg';

// const defaultTheme = createTheme();

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#bca0d3',
    },
    secondary: {
      main: '#16a085',
    },
  },
});

const BackgroundDiv = styled('div')({
  height: '100vh',
  width: '100%',
  backgroundImage: `url(${winery})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  filter: 'saturate(30%)',
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <BackgroundDiv>
        <Container component='main' maxWidth='xs'>
          <CssBaseline>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Grid
                item
                xs={12}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Typography>Abby and Andrew</Typography>
              </Grid>
              {/* <Stack> */}{' '}
              <Grid
                item
                xs={12}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <TextField
                  id='outlined-basic'
                  label='Please enter the phrase here'
                  variant='outlined'
                />{' '}
              </Grid>
              <Button variant='contained'>Contained</Button>
              {/* </Stack> */}
            </Grid>
          </CssBaseline>
        </Container>
      </BackgroundDiv>
    </ThemeProvider>
  );
}
