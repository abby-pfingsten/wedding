import * as React from 'react';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import { Image } from 'mui-image';

export default function OurStory() {
  return (
    <Container id='Our Story'>
      <Typography variant='h2' align='center'>
        Our Story
      </Typography>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            {/* <Image src='../images/winery-stock.jpg'></Image> */}
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>{' '}
    </Container>
  );
}
