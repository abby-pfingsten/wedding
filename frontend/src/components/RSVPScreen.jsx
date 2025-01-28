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

function RSVPScreen({ hideIsTrue }) {
  const [response, setResponse] = React.useState(null);
  const handleRSVPResponse = (e) => {
    setResponse(e.target.value);
  };

  return (
    <DialogContent className='dialog'>
      {/* <Button
            variant='contained'
            onClick={() => {
              setSend(true);
              setUpdate(false);
            }}
          >
            Send Your Response
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              setUpdate(true);
              setSend(false);
            }}
          >
            Update Your Response
          </Button> */}

      {hideIsTrue ? (
        <DialogContentText>
          Hello recruiter or potential future teammate! 👋 If you would like to
          try out the RSVP functionality, you can use the following email:
          adminemail@temp.com, because as much as we would love your company at
          our wedding, it is a small event. (Depending on where I am at in the
          process, this functionality might not yet be available. )
        </DialogContentText>
      ) : (
        <DialogContentText>
          We hope you can make it to our celebration! Please provide a good
          e-mail address that you reguarly check for updates. If your Save the
          Date had more than one name, you will each have to individually RSVP.
        </DialogContentText>
      )}
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
          <FormControlLabel value='yes' control={<Radio />} label='Yes! 🥳💜' />
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
              response, we will assume you're not making it, so we might offer
              the spot to someone else. Please reach out ASAP if anything
              changes, but there are no guarantee's once your response has been
              received.
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
  );
}
export default RSVPScreen;
