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
import freshmanFormal from '../images/our-story/freshman_year_formal.JPG';
import freshmanAddams from '../images/our-story/freshman_year_addams.JPEG';
import sophomoreYear from '../images/our-story/sophomore_year.JPG';
import juniorYear from '../images/our-story/junior_year.JPG';
import seniorYear from '../images/our-story/senior_year.JPG';
import meelo from '../images/our-story/meelo_thanksgiving.jpg';

export default function OurStory() {
  let ourStoryArray = [];

  ourStoryArray = [
    {
      key: 1,
      header: 'August 2016',
      subHeader: 'Semi-Formal',
      text: 'Abby and Andrew first became friends at the beginning of their freshman year, after Abby successfully inserted herself into the Stever 1 crew. Andrew had his first semi-formal in September and Abby was his third choice!',
      image: freshmanFormal,
    },
    {
      key: 2,
      header: 'Second Header',
      subHeader: 'Second Sub Header',
      text: 'Second Text',
      image: freshmanAddams,
    },
    {
      key: 3,
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
      image: sophomoreYear,
    },
    {
      key: 4,
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
      image: juniorYear,
    },
    {
      key: 5,
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
      image: seniorYear,
    },
    {
      key: 6,
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
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
