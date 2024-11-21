import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import weddingPagePics from '../data/wedding-page-data.jsx';
import Popover from '../components/Popover.jsx';

export default function Wedding() {
  const currentDate = new Date();
  const weddingWeekend = new Date('2026-09-01T16:15:00Z');

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
          }}
        >
          {/* <Item> */}
          <ImageList
            sx={{ width: 600, height: 650 }}
            variant='quilted'
            cols={6}
            rowHeight={121}
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
          {/* </Item> */}
          <Grid offset={7}>
            <Typography variant='h2'>Abigale & Andrew</Typography>
            <Typography variant='h5'>
              September 6th, 2026 - September 6th, 2026
            </Typography>
            <Typography variant='h5'>Etna, Sicily, Italy</Typography>
            <Typography variant='h5'>
              {subtractDates(currentDate, weddingWeekend)} Days To Go!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
