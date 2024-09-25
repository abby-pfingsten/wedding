import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import picOne from '../images/our-story/pic_1.jpg';
import picTwo from '../images/our-story/pic_2.jpg';
import picThree from '../images/our-story/pic_3.jpg';

export default function OurStory() {
  let ourStoryArray = [];

  ourStoryArray = [
    {
      key: 1,
      header: 'First Header',
      subHeader: 'First Sub Header',
      text: 'First Text',
      image: picOne,
    },
    {
      key: 2,
      header: 'Second Header',
      subHeader: 'Second Sub Header',
      text: 'Second Text',
      image: picTwo,
    },
    {
      key: 3,
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
      image: picThree,
    },
  ];

  return (
    <Container id='Our Story'>
      <Typography variant='h2' align='center'>
        Our Story
      </Typography>
      <Timeline position='alternate'>
        {ourStoryArray.map((timelineItem) => (
          <TimelineItem key={timelineItem.key}>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: 100 }} />
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
              <Grid container direction='column'>
                <Grid item xs={2} sm={4} md={4}>
                  {' '}
                  {timelineItem.header}
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  {' '}
                  {timelineItem.subHeader}
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
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
