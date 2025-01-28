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
  };

  // const [response, setResponse] = React.useState(null);
  // const handleRSVPResponse = (e) => {
  //   setResponse(e.target.value);
  // };

  const [update, setUpdate] = React.useState(null);
  const [send, setSend] = React.useState(null);
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
          {showButton ? (
            <>
              <Button
                variant='contained'
                onClick={() => {
                  setSend(true);
                  setUpdate(false);
                  setShowButton(false);
                }}
              >
                Send Your Response
              </Button>
              <Button
                variant='contained'
                onClick={() => {
                  setUpdate(true);
                  setSend(false);
                  setShowButton(false);
                }}
              >
                Update Your Response
              </Button>
            </>
          ) : (
            <>
              <RSVPContent hideIsTrue={hideIsTrue}></RSVPContent>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button type='submit'>Send Your Response!</Button>
          <Button onClick={handleRSVPClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default RSVP;
