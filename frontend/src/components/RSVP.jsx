import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import '../styles/RSVP.scss';

function RSVP({ openRSVP, setOpenRSVP }) {
  const handleRSVPClose = () => {
    setOpenRSVP(false);
  };

  const [response, setResponse] = React.useState(null);

  const handleRSVPResponse = (e) => {
    setResponse(e.target.value);
  };

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
          <DialogContentText>
            We hope you can make it to our celebration! Please provide a good
            e-mail address that you reguarly check for updates. If your Save the
            Date had more than one name, you will each have to individually
            RSVP.
          </DialogContentText>
          <TextField
            className='dialog__email'
            autoFocus
            required
            margin='dense'
            id='email'
            name='email'
            label='Email'
            type='email'
            fullWidth
            variant='standard'
          />
          <TextField
            // disable TODO add disabled once get data
            id='name'
            label='Name'
            variant='standard'
            margin='dense'
            fullWidth
            required
          />
          <FormControl className='dialog__form'>
            <br></br>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              Will you be attending?
            </FormLabel>
            <RadioGroup
              className='dialog__radioButtons'
              value={response}
              onChange={handleRSVPResponse}
              row
              aria-labelledby='demo-radio-buttons-group-label'
              // TODO --- later change this with the value from the DB
              // defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='yes'
                control={<Radio />}
                label='Yes! 🥳💜'
              />
              <FormControlLabel value='no' control={<Radio />} label='No 😿' />
              <FormControlLabel
                value='maybe'
                control={<Radio />}
                label='Maybe 👽'
              />
              {response === 'yes' ? (
                <div className='dialog__radioButtons--yes'>
                  <TextField
                    id='restrictions'
                    label='List any allergies/dietary restrictions'
                    variant='standard'
                    margin='dense'
                    fullWidth
                  />
                  <TextField
                    id='comments'
                    label='Feel free to leave a note!'
                    variant='standard'
                    margin='dense'
                    fullWidth
                  />
                </div>
              ) : (
                <></>
              )}
              {response === 'no' ? (
                <p className='dialog__radioButtons--no'>
                  We're sad you won't be able to make it. By submitting this
                  response, we will assume you're not making it, so we might
                  offer the spot to someone else. Please reach out ASAP if
                  anything changes, but there are no guarantee's once your
                  response has been received.
                </p>
              ) : (
                <></>
              )}
              {response === 'maybe' ? (
                <p className='dialog__radioButtons--maybe'>
                  Please remember to make sure to confirm your reponse by end of
                  January.
                </p>
              ) : (
                <></>
              )}
            </RadioGroup>
          </FormControl>
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
