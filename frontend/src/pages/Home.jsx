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
import RSVP from '../components/RSVP';

export default function Home({ theme, hideInfo }) {
  // to handle the opening/closing of RSVP since
  // they are in different components
  const [openRSVP, setOpenRSVP] = React.useState(false);
  const [isTrue, setIsTrue] = React.useState(false);

  React.useEffect(() => {
    // Retrieve the value from localStorage
    const x = localStorage.getItem('x');

    // Parse it and check if it's true
    if (hideInfo && JSON.parse(hideInfo) === true) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, []); //

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} setOpenRSVP={setOpenRSVP} />
      <RSVP openRSVP={openRSVP} setOpenRSVP={setOpenRSVP} isTrue={isTrue} />
      <Wedding />
      <Schedule isTrue={isTrue} />
      <OurStory isTrue={isTrue} />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}
