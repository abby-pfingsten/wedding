import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// import Timeline components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import Divider from '@mui/material/Divider';
import { FaPagelines } from 'react-icons/fa';

// import styling
import '../styles/OurStory.scss';

// import array with data
import ourStoryPics from '../data/our-story-data.jsx';

export default function OurStory() {
  return (
    <Container id='Our Story' maxWidth={false}>
      <br></br>
      <br></br>
      <Divider>
        <FaPagelines style={{ color: '#bca0d3' }}></FaPagelines>
      </Divider>
      <br></br>
      <Typography variant='h2' align='center'>
        Our Story
      </Typography>
      <Timeline position='alternate'>
        {ourStoryPics.map((timelineItem) => (
          <TimelineItem key={timelineItem.key}>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: 70 }} />
              <Box
                component='img'
                sx={{
                  height: 105,
                  width: 105,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  borderRadius: 15,
                  objectFit: 'cover',
                }}
                // alt='The house from the offer.'
                src={timelineItem.image}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Grid container direction='column' className='timeLine'>
                <Grid item xs={2} sm={4} md={4} className='timeLine__header'>
                  {' '}
                  {timelineItem.header}
                </Grid>
                <Grid item xs={2} sm={4} md={4} className='timeLine__subHeader'>
                  {' '}
                  {timelineItem.subHeader}
                </Grid>
                <Grid className='timeLine__text' item xs={2} sm={4} md={4}>
                  {' '}
                  {timelineItem.text}
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>{' '}
    </Container>
  );
}
