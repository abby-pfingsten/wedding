import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import background from '../images/wedding-background.jpg';

// const defaultTheme = createTheme();

// const defaultTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#bca0d3',
//     },
//     secondary: {
//       main: '#16a085',
//     },
//   },
//   typography: {
//     fontFamily: 'Playfair Display',
//   },
// });

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    // <ThemeProvider theme={theme}>
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
              <Typography color={'white'}>The Wedding Of</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography color={'white'}>Abby and Andrew</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <TextField
                fullWidth
                id='standard-basic'
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
              <Link href='/'>
                <Button size='large' variant='contained'>
                  Enter
                </Button>
              </Link>
            </Grid>{' '}
          </Grid>
        </CssBaseline>
      </Container>
    </BackgroundDiv>
    // {/* </ThemeProvider> */}
  );
}
