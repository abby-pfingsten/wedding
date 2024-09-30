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
// import TimelineDot from '@mui/lab/TimelineDot';
// import pictures
import freshmanFormal from '../images/our-story/freshman_year_formal.JPG';
import freshmanAddams from '../images/our-story/freshman_year_addams.JPEG';
import sophomoreYear from '../images/our-story/sophomore_year.JPG';
import juniorYear from '../images/our-story/junior_year.JPG';
import seniorYear from '../images/our-story/senior_year.JPG';
import meelo from '../images/our-story/meelo_thanksgiving.jpg';
// import styling
import '../styles/OurStory.scss';

export default function OurStory() {
  let ourStoryArray = [];

  ourStoryArray = [
    {
      key: 1,
      header: 'August 2016',
      subHeader: 'Semi-Formal',
      text: 'We first became friends at the beginning of our freshman year, after Abby successfully inserted herself into the Stever 1 crew. Andrew had his first semi-formal in September and Abby was his third choice!',
      image: freshmanFormal,
    },
    {
      key: 2,
      header: 'October/November 2016',
      subHeader: 'Addams Family Performance',
      text: 'This was the first time Andrew saw Abby performing, as Wednesday in The Addams Family. We both had feelings for each other at this point, but we were trying to hide it. Andrew asked Abby to be his girlfriend shortly after this in November.',
      image: freshmanAddams,
    },
    {
      key: 3,
      header: 'November 2017',
      subHeader: 'First Thanksgiving Together',
      text: 'We proceeded to spend the rest of our sophomore...',
      image: sophomoreYear,
    },
    {
      key: 4,
      header: 'May 2018',
      subHeader: 'Speakeasy in Detroit',
      text: 'Junior...',
      image: juniorYear,
    },
    {
      key: 5,
      header: 'November 2019',
      subHeader: 'Abby 21st B-day Dinner',
      text: 'And senior years of college together',
      image: seniorYear,
    },
    {
      key: 6,
      header: 'November 2020',
      subHeader: 'Meelo!',
      text: 'After finishing college in May of 2020, we finally got our own apartment together and adopted the best most special boy in the entire world.',
      image: meelo,
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
