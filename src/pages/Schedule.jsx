import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { FaPagelines } from 'react-icons/fa';

import scheduleData from '../data/schedule-data.jsx';
// import styling
import '../styles/Schedule.scss';

function Schedule() {
  const Item = styled(Paper)(({ theme }) => ({
    // height: 460,
    width: 450,
    backgroundColor: '#F5F3FA',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: '#a78ebd',
    color: 'rgb(167, 142, 189)',
  }));
  return (
    <Container id='Schedule' maxWidth={false}>
      <br></br>
      <br></br>
      <Divider>
        <FaPagelines style={{ color: '#bca0d3' }}></FaPagelines>
      </Divider>
      <br></br>
      <Grid>
        <Typography variant='h2' align='center'>
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
              <div className='schedule__title'>
                <h3 className='schedule__title--day'>{item.day}</h3>
                <h4 className='schedule__title--summary'>{item.daySummary}</h4>
              </div>
              {item.activities.map((activity, index) => (
                <div className='schedule__activities' key={index}>
                  <p className='schedule__activities--time'>{activity.time}</p>
                  <p className='schedule__activities--location'>
                    {activity.location}
                  </p>
                  <p className='schedule__activities--description'>
                    {activity.description}
                  </p>
                </div>
              ))}
            </Item>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Schedule;
