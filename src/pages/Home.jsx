import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Wedding from '../pages/Wedding';
import OurStory from './OurStory';
import FAQ from '../pages/FAQ';
import Schedule from '../pages/Schedule';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} />
      <Wedding />
      <Schedule />
      <OurStory />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}
