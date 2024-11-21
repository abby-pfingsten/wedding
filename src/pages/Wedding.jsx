import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import weddingPagePics from '../data/wedding-page-data.jsx';
import Popover from '../components/Popover.jsx';

export default function Wedding() {
  // create the two dates
  const currentDate = new Date();
  const weddingWeekend = new Date('2026-09-04T16:15:00Z');

  // subtract the current date from the date of when the wedding is
  function subtractDates(currentDate, weddingDate) {
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
            flexDirection: { xs: 'column', sm: 'row', mid: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Grid>
            <ImageList
              sx={{ width: 600, height: 650 }}
              variant='quilted'
              cols={6}
              rowHeight={110}
            >
              {weddingPagePics.map((item) => (
                <ImageListItem
                  key={item.key}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img src={item.img} alt={item.title} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid
            offset={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Typography variant='h2'>Abigale & Andrew</Typography>
            <Typography variant='h6'>
              September 4th, 2026 - September 6th, 2026
            </Typography>
            <Typography variant='h6'>Etna, Sicily, Italy</Typography>
            <Typography variant='h5'>
              {subtractDates(currentDate, weddingWeekend)} Days To Go!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
