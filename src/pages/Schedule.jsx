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
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  return (
    <>
      <Container id='Schedule'>
        <Typography variant='h2' align='left'>
          Schedule
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'space-evenly',
            // alignItems: 'left',
            width: '100%',
          }}
        >
          {scheduleData.map((item, index) => (
            <Item key={index}>
              <Box sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                {item.day}
                <ul>
                  <li></li>
                </ul>
              </Box>
            </Item>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Schedule;
