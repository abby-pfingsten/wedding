import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { timelineClasses } from '@mui/lab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import first from '../images/ab-abj-bridge.jpg';
import { FirstPageOutlined } from '@mui/icons-material';

export default function Wedding() {
  const [timer, setTimer] = useState('00:00:00');
  // const [currentDate, setCurrentDate] = useState(null);

  const currentDate = new Date();
  const weddingWeekend = new Date('2026-09-01T16:15:00Z');

  function subtractDates(currentDate, weddingDate) {
    const millisecondsDiff = weddingDate.getTime() - currentDate.getTime();
    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  }

  const [x, setX] = useState(0);

  // console.log(currentDate.getSeconds());
  // console.log(weddingWeekend.getSeconds());

  useEffect(() => {
    setInterval(() => {
      // console.log(1);
      //   setX((x) => x + 1);
    }, 1000);
    // setX((x) => x + 1);
    // console.log(x);
  });
  // useEffect(() => {
  //   let daysRemaining = subtractDates(currentDate, weddingWeekend);

  //   const timeLeft = {
  //     seconds: Math.floor(daysRemaining / 24 / 60 / 60),
  //     hours: Math.floor(daysRemaining / 24),
  //     days: daysRemaining,
  //   };
  //   console.log(timeLeft);
  // });

  const itemData = [
    {
      key: 1,
      img: first,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      key: 2,
      img: first,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
  ];
  return (
    <>
      <Container id='Wedding'>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* subtractDates(currentDate, weddingWeekend) */}
          <Typography>{subtractDates(currentDate, weddingWeekend)}</Typography>
          TEXT TEXT TEXT TEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT
          TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXT
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant='quilted'
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.key}
                // cols={item.cols || 1}
                // rows={item.rows || 1}
              >
                <img
                  src={item.img}
                  // {...srcset(item.img, 121, item.rows, item.cols)}
                  // alt={item.title}
                  // loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Container>
    </>
  );
}
