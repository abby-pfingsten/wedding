import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RSVPContent from './RSVPContent';
import '../styles/RSVP.scss';

function RSVP({ openRSVP, setOpenRSVP, hideIsTrue }) {
  const handleRSVPClose = () => {
    setOpenRSVP(false);
    setShowButton(true);
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
                hideIsTrue={hideIsTrue}
                update={update}
                // send={send}
              ></RSVPContent>
              <DialogActions>
                <Button type='submit' onClick={handleRSVPClose}>
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
