import * as React from 'react';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function RSVPContent({
  hide,
  update,
  setEmail,
  setNote,
  setAllergies,
  status,
  setStatus,
  setName,
  setEmailError,
  setNameError,
  setResponseError,
}) {
  // Functions ----

  const handleRSVPResponse = (e) => {
    let tempResponse = e.target.value;
    if (tempResponse.length > 0) {
      setStatus(tempResponse);
      setResponseError(false);
    } else {
      setResponseError(true);
    }
  };

  const handleEmailEntry = (e) => {
    let tempEmail = e.target.value;
    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if the email is valid then we can assign update our state
    if (regex.test(tempEmail)) {
      setEmail(tempEmail);
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    // TODO --- have to check if email has already been submitted
  };

  const handleNameEntry = (e) => {
    let tempName = e.target.value;
    if (tempName.length > 0) {
      setName(tempName);
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  return (
    <>
      {JSON.parse(hide) === true ? (
        <DialogContentText>
          Hello recruiter or potential future teammate! 👋 <br></br> <br></br>If
          you would like to try out the RSVP functionality, you can use the
          following email: <b>testingemail@test.com</b>. <br></br>
          <br></br>There is a uniqueness tied to the email in an effort to make
          sure real guests don't RSVP twice, so in order to make this work for
          "general" purposes, a random int will be appended to each of these
          emails on the backend to ensure uniqueness. This does mean you will
          not be able to use the "Update Your Response" section, unfortunately.
        </DialogContentText>
      ) : (
        <DialogContentText>
          {update ? (
            <>
              <b>Updating your RSVP response is coming soon!</b>
            </>
          ) : (
            <>
              We hope you can make it to our celebration! Please provide a good
              e-mail address that you reguarly check for updates. If your Save
              the Date had more than one name (or family name), you will each
              have to individually RSVP with your own e-mail's.
            </>
          )}
        </DialogContentText>
      )}
      {/* EMAIL */}
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
        onInput={handleEmailEntry}
        autoComplete='off'
      />
      {/* NAME  */}
      <TextField
        disabled={update ? true : false}
        // disable TODO add disabled once get data
        id='name'
        label='Name'
        variant={update ? 'filled' : 'standard'}
        margin='dense'
        fullWidth
        required
        onInput={handleNameEntry}
        autoComplete='off'
      />
      {/* RSVP STATUS */}
      <FormControl className='dialog__form'>
        <br></br>
        <FormLabel id='demo-row-radio-buttons-group-label'>
          Will you be attending?
        </FormLabel>
        <RadioGroup
          className='dialog__radioButtons'
          value={status}
          onChange={handleRSVPResponse}
          row
          aria-labelledby='demo-radio-buttons-group-label'
          // TODO --- later change this with the value from the DB
          // defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel value='Yes' control={<Radio />} label='Yes! 🥳💜' />
          <FormControlLabel value='No' control={<Radio />} label='No 😿' />
          <FormControlLabel
            value='Maybe'
            control={<Radio />}
            label='Maybe 👽'
          />
          {/* ALLERGIES & NOTE */}
          {status === 'Yes' ? (
            <div className='dialog__radioButtons--yes'>
              <TextField
                id='restrictions'
                label='List any allergies/dietary restrictions'
                variant='standard'
                margin='dense'
                fullWidth
                onInput={(e) => setAllergies(e.target.value)}
              />
              <TextField
                id='comments'
                label='Feel free to leave a note!'
                variant='standard'
                margin='dense'
                fullWidth
                onInput={(e) => setNote(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
          {status === 'No' ? (
            <p className='dialog__radioButtons--no'>
              We're sad you won't be able to come. Please reach out or update
              your status ASAP if anything changes.
            </p>
          ) : (
            <></>
          )}
          {status === 'Maybe' ? (
            <p className='dialog__radioButtons--maybe'>
              Please remember to make sure to confirm your reponse by end of
              September 2025.
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
