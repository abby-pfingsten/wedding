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

export default function Home({ theme, hide }) {
  // to handle the opening/closing of RSVP since
  // they are in different components
  const [openRSVP, setOpenRSVP] = React.useState(false);
  // const [hideIsTrue, setHideIsTrue] = React.useState(false);

  // React.useEffect(() => {
  //   // Retrieve the value from localStorage

  //   // Parse it and check if it's true and if it is
  //   // we need to hide the information
  //   if (hideInfo && JSON.parse(hideInfo) === true) {
  //     setHideIsTrue(true);
  //   } else {
  //     setHideIsTrue(false);
  //   }
  // }, [hideInfo]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} setOpenRSVP={setOpenRSVP} />
      <RSVP openRSVP={openRSVP} setOpenRSVP={setOpenRSVP} hide={hide} />
      <Wedding />
      <Schedule hide={hide} />
      <OurStory hide={hide} />
      <FAQ hide={hide} />
      <Footer />
    </ThemeProvider>
  );
}
