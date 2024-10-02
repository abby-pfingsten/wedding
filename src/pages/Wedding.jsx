import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { timelineClasses } from '@mui/lab';

export default function Wedding() {
  const [timer, setTimer] = useState('00:00:00');
  // const [currentDate, setCurrentDate] = useState(null);

  const currentDate = new Date();
  const weddingWeekend = new Date('2026-09-01T16:15:00Z');

  function subtractDates(currentDate, weddingDate) {
    const millisecondsDiff = weddingDate.getTime() - currentDate.getTime();
    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  }

  const [x, setX] = useState(0);

  // console.log(currentDate.getSeconds());
  // console.log(weddingWeekend.getSeconds());

  useEffect(() => {
    setInterval(() => {
      console.log(1);
      //   setX((x) => x + 1);
    }, 1000);
    // setX((x) => x + 1);
    // console.log(x);
  });
  // useEffect(() => {
  //   let daysRemaining = subtractDates(currentDate, weddingWeekend);

  //   const timeLeft = {
  //     seconds: Math.floor(daysRemaining / 24 / 60 / 60),
  //     hours: Math.floor(daysRemaining / 24),
  //     days: daysRemaining,
  //   };
  //   console.log(timeLeft);
  // });
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
