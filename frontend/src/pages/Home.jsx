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
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Home({ theme, hide }) {
  // to handle the opening/closing of RSVP since
  // they are in different components
  const [openRSVP, setOpenRSVP] = React.useState(false);

  // state variable to handle showing an alert to the
  // user when an rsvp response was successfully saved
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const [showFailedAlert, setShowFailedAlert] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccessAlert(false); // Disable your alert after 5 seconds
      setShowFailedAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timeout); // Clears timer in case you close your alert somewhere else.
    };
  }, [showSuccessAlert, showFailedAlert]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} setOpenRSVP={setOpenRSVP} />
      <RSVP
        openRSVP={openRSVP}
        setOpenRSVP={setOpenRSVP}
        hide={hide}
        setShowSuccessAlert={setShowSuccessAlert}
        setShowFailedAlert={setShowFailedAlert}
      />
      {showSuccessAlert ? (
        <>
          <Alert
            sx={{ position: 'absolute' }}
            icon={<CheckIcon fontSize='inherit' />}
            severity='success'
          >
            Your RSVP has been recorded! Thank you!
          </Alert>
        </>
      ) : (
        <></>
      )}
      {showFailedAlert ? (
        <>
          <Alert severity='error' sx={{ position: 'absolute' }}>
            Your RSVP was not recorded. Please try again. If the issue persists,
            please try on desktop.
          </Alert>
        </>
      ) : (
        <></>
      )}

      <Wedding />
      <Schedule hide={hide} />
      <OurStory hide={hide} />
      <FAQ hide={hide} />
      <Footer />
    </ThemeProvider>
  );
}
