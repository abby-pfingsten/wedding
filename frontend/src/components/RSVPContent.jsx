import * as React from 'react';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function RSVPContent({
  hideIsTrue,
  update,
  setEmail,
  setNote,
  setAllergies,
  setStatus,
  setName,
}) {
  const [response, setResponse] = React.useState(null);
  const handleRSVPResponse = (e) => {
    setResponse(e.target.value);
  };

  return (
    <>
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
          Date had more than one name (or family name), you will each have to
          individually RSVP with your own e-mail's.
        </DialogContentText>
      )}
      <TextField
        disabled={update ? true : false}
        className='dialog__email'
        autoFocus
        required
        margin='dense'
        id='email'
        name='email'
        label='Email'
        type='email'
        fullWidth
        variant={update ? 'filled' : 'standard'}
        onBlur={(e) => setEmail(e.target.value)}
      />
      <TextField
        disabled={update ? true : false}
        // disable TODO add disabled once get data
        id='name'
        label='Name'
        variant={update ? 'filled' : 'standard'}
        margin='dense'
        fullWidth
        required
        onBlur={(e) => setName(e.target.value)}
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
          onBlur={(e) => setStatus(e.target.value)}
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
                onBlur={(e) => setAllergies(e.target.value)}
              />
              <TextField
                id='comments'
                label='Feel free to leave a note!'
                variant='standard'
                margin='dense'
                fullWidth
                onBlur={(e) => setNote(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
          {response === 'no' ? (
            <p className='dialog__radioButtons--no'>
              We're sad you won't be able to come. Please reach out or update
              your status ASAP if anything changes.
            </p>
          ) : (
            <></>
          )}
          {response === 'maybe' ? (
            <p className='dialog__radioButtons--maybe'>
              Please remember to make sure to confirm your reponse by end of
              August 2026.
            </p>
          ) : (
            <></>
          )}
        </RadioGroup>
      </FormControl>
    </>
  );
}
export default RSVPContent;
