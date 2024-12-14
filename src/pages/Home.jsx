import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Wedding from '../pages/Wedding';
import OurStory from './OurStory';
import FAQ from '../pages/FAQ';
import Schedule from '../pages/Schedule';

export default function Home({ theme }) {
  return (
    // <Container id='Home'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} />
      <Wedding />
      <Schedule />
      <OurStory />
      <FAQ />
    </ThemeProvider>
    // </Container>
  );
}
