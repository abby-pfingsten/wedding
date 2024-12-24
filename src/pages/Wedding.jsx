import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import { Suspense, lazy } from 'react';
import { FaPagelines } from 'react-icons/fa';
// import Popover from '../components/Popover.jsx';

import '../styles/Wedding.scss';

const EngagementPics = lazy(() => import('../components/EngagementPics.jsx'));

export default function Wedding() {
  // create the two dates
  const currentDate = new Date();
  const weddingWeekend = new Date('2026-07-30T16:15:00Z');

  // subtract the current date from the date of when the wedding is
  function subtractDates(currentDate, weddingDate) {
    const millisecondsDiff = weddingDate.getTime() - currentDate.getTime();
    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  }

  return (
    <>
      <Container id='Wedding' maxWidth={false}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
            },
            justifyContent: 'space-between',
          }}
        >
          {/* Engagement Picture Images */}
          <Suspense>
            <EngagementPics />
          </Suspense>
          {/* Title and Wedding Details */}
          <Grid
            offset={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              className='test'
              
            >
              <Typography
                variant='h2'
                sx={{
                  '@media (max-width: 600px)': {
                    fontSize: 40,
                  },
                }}
              >
                Abigale & Andrew
              </Typography>
              <FaPagelines className='icon' />

              <Typography variant='h6'>
                July 30th, 2026 - August 2nd, 2026
              </Typography>
              <FaPagelines className='icon' />

              <Typography variant='h6'>Etna, Sicily, Italy</Typography>
              <FaPagelines className='icon' />

              <Typography variant='h5'>
                {subtractDates(currentDate, weddingWeekend)} Days To Go!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
