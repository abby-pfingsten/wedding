import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function Schedule() {
  return (
    <>
      <Container id='Schedule'>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography varient='h2' align='center'>
            {' '}
            Schedule
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Schedule;
