import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

export default function Wedding() {
  const [timer, setTimer] = useState('00:00:00');
  // const [currentDate, setCurrentDate] = useState(null);

  const currentDate = new Date();
  // setCurrentDate(new Date());

  const weddingWeekend = new Date('2026-09-01T16:15:00Z');

  function subtractDates(currentDate, weddingDate) {
    // setCurrentDate(new Date());
    const millisecondsDiff = weddingDate.getTime() - currentDate.getTime();
    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
  }

  return (
    <>
      <Container id='Wedding'>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* subtractDates(currentDate, weddingWeekend) */}
          <Typography>{subtractDates(currentDate, weddingWeekend)}</Typography>
          TEXT TEXT TEXT TEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXT
        </Grid>
      </Container>
    </>
  );
}
