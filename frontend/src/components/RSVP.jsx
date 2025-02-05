import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RSVPContent from './RSVPContent';
import '../styles/RSVP.scss';
import axios from 'axios';

function RSVP({ openRSVP, setOpenRSVP, hide }) {
  const handleRSVPClose = () => {
    setOpenRSVP(false);
    setShowButton(true);
  };

  const [email, setEmail] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [allergies, setAllergies] = React.useState(null);
  const [note, setNote] = React.useState(null);

  // if this is a recruiter trying to test the functionality
  // or I am testing, just append a random number to the end
  // of the email so that the required uniqueness of it is not
  // invalidated
  React.useEffect(() => {
    if (email === 'TESTINGEMAIL@TEST.COM') {
      setEmail(email + Math.random());
    }
  }, [email]);

  function sendResponse() {
    axios
      .post(
        'http://localhost:8000/api/rsvp',
        {
          name,
          email,
          status,
          allergies,
          note,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Ensure content type is set
          },
        }
      )
      .then((response) => {
        console.log('Succesfully saved data.');
      })
      .catch((error) => console.log(error));
  }
  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    setOpenRSVP(false);
    setShowButton(true);
    sendResponse();
  };

  const [update, setUpdate] = React.useState(null);
  // const [send, setSend] = React.useState(null);
  const [counter, setCounter] = React.useState(0);
  const [showButton, setShowButton] = React.useState(true);

  return (
    <React.Fragment>
      <Dialog
        open={openRSVP}
        onClose={handleRSVPClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleRSVPClose();
          },
        }}
      >
        <DialogTitle>Let Us Know If You Can Make It!</DialogTitle>
        <DialogContent className='dialog'>
          {showButton && openRSVP ? (
            <div className='rsvpButtons'>
              <Button
                variant='contained'
                onClick={() => {
                  setCounter(counter + 1);
                  // setSend(true);
                  setUpdate(false);
                  setShowButton(false);
                }}
              >
                Send Your Response
              </Button>
              <Button
                variant='contained'
                onClick={() => {
                  setCounter(counter + 1);
                  setUpdate(true);
                  // setSend(false);
                  setShowButton(false);
                }}
              >
                Update Your Response
              </Button>
            </div>
          ) : (
            <>
              <RSVPContent
                hide={hide}
                update={update}
                setEmail={setEmail}
                setNote={setNote}
                setAllergies={setAllergies}
                setStatus={setStatus}
                setName={setName}
                // send={send}
              ></RSVPContent>
              <DialogActions>
                <Button type='submit' onClick={handleRSVPSubmit}>
                  Send Your Response!
                </Button>
                <Button onClick={handleRSVPClose}>Cancel</Button>
              </DialogActions>
            </>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default RSVP;
