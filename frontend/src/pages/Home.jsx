import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Wedding from './Wedding';
import OurStory from './OurStory';
import FAQ from './FAQ';
import Schedule from './Schedule';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RSVPForm from '../components/RSVPForm';

export default function Home({ theme }) {
  const [openRSVP, setOpenRSVP] = React.useState(false);
  // const handleRSVPOpen = () => {
  //   openRSVP(true);
  // };
  // const handleRSVPClose = () => {
  //   openRSVP(false);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} openRSVP={openRSVP} setOpenRSVP={setOpenRSVP} />
      <RSVPForm openRSVP={openRSVP} setOpenRSVP={setOpenRSVP} />
      <Wedding />
      <Schedule />
      <OurStory />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}
