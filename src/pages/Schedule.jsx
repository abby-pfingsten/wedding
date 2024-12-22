import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import scheduleData from '../data/schedule-data.jsx';

function Schedule() {
  const Item = styled(Paper)(({ theme }) => ({
    // height: 460,
    width: 450,
    backgroundColor: '#F5F3FA',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#a78ebd',
    // color: theme.palette.text.secondary,

    // ...theme.applyStyles('dark', {
    // //   backgroundColor: 'blue',1
    // }),
  }));
  return (
    <Container id='Schedule' maxWidth={false}>
      <Grid>
        <Typography variant='h2' align='left'>
          Schedule
        </Typography>
        <br></br>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            gap: 5,
            width: '100%',
          }}
        >
          {scheduleData.map((item, index) => (
            <Item elevation={8} key={index} className='schedule'>
              <h4 className='schedule__title'>{item.day}</h4>
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100%',
                }}
              > */}
              {item.activities.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    // height: '100%',
                  }}
                >
                  {' '}
                  <p>{activity.time}</p>
                  <p>{activity.description}</p>
                </div>
              ))}
              {/* </div> */}
            </Item>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Schedule;
