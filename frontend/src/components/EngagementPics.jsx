import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import weddingPagePics from '../data/wedding-page-data.jsx';
function EngagementPics() {
  return (
    <>
      <Grid>
        <ImageList
          sx={{
            width: '100%',
            height: 650,
            '@media (max-width: 600px)': {
              width: 350, // reduce columns for mobile
              height: 350,
            },
            '@media (max-width: 900px)': {
              width: '100%', // reduce columns for tablet
              height: 450,
            },
          }}
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
              <img src={item.img} alt={item.alt} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
}
export default EngagementPics;
