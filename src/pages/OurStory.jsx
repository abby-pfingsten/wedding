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

import { useMediaQuery, useTheme } from '@mui/material';

export default function OurStory() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

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
      <Timeline position={isSmallScreen ? 'alternate' : 'alternate'}>
        {ourStoryPics.map((timelineItem) => (
          <TimelineItem key={timelineItem.key}>
            <TimelineSeparator>
              <TimelineConnector />
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
            <TimelineContent
              className='test'
              sx={{
                display: 'flex',
                flexDirection: timelineItem.key % 2 === 0 ? 'row' : 'column',
                width: '100%',
                alignSelf: timelineItem.key % 2 === 0 ? 'left' : 'right',
                justifyContent:
                  timelineItem.key % 2 === 0 ? 'flex-end' : 'flex-start',
                flex: {
                  xs: 'auto !important',
                  // sm: 'auto !important',
                  md: '1 1 0% !important',
                },
              }}
            >
              <Grid
                container
                direction='column'
                className='timeLine'
                sx={{
                  display: 'flex',
                  flexFlow: 'column',
                  width: { xs: '100%', sm: '60%' },
                }}
              >
                <h4 className='timeLine__header'>{timelineItem.header}</h4>
                <h5 className='timeLine__subHeader'>
                  {timelineItem.subHeader}
                </h5>
                <p className='timeLine__text'> {timelineItem.text}</p>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>{' '}
    </Container>
  );
}
