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

export default function Home({ theme, recruiter }) {
  // to handle the opening/closing of RSVP since
  // they are in different components
  const [openRSVP, setOpenRSVP] = React.useState(false);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} setOpenRSVP={setOpenRSVP} />
      <RSVP
        openRSVP={openRSVP}
        setOpenRSVP={setOpenRSVP}
        recruiter={recruiter}
      />
      <Wedding />
      <Schedule recruiter={recruiter} />
      <OurStory recruiter={recruiter} />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}
