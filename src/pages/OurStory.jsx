import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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
  // ourStoryArray = [
  //   {
  //     header: 'First Header',
  //     subHeader: 'First Sub Header',
  //     text: 'First Text',
  //     image: { picOne },
  //   },
  //   {
  //     header: 'Second Header',
  //     subHeader: 'Second Sub Header',
  //     text: 'Second Text',
  //     image: { picTwo },
  //   },
  //   {
  //     header: 'Third Header',
  //     subHeader: 'Third Sub Header',
  //     text: 'Third Text',
  //     image: { picThree },
  //   },
  // ];

  return (
    <Container id='Our Story'>
      <Typography variant='h2' align='center'>
        Our Story
      </Typography>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              {/* <FastfoodIcon></FastfoodIcon> */}
              <Box
                component='img'
                sx={{
                  height: 105,
                  width: 105,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  borderRadius: 15,
                }}
                alt='The house from the offer.'
                src={picOne}
              />
              {/* <Image src='../images/our-story/pic_1.jpg' width='5px' height='5px'/> */}
            </TimelineDot>
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
