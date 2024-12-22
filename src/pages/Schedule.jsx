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
    // height: 350,
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
            <Item elevation={8} key={index}>
              {/* <Box> */}
              <h4>{item.day}</h4>
              {/* </Box>
              <Box sx={{ fontWeight: 'bold', textAlign: 'left' }}> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                {item.activities.map((item, index) => (
                  <div key={index}>
                    {' '}
                    <div>{item.time}</div>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
              {/* </Box> */}
            </Item>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Schedule;
