import { GridView } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wedding() {
  const [items, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/guests')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Container id='Wedding'>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <h1>Items</h1>
            <ul>
              {items.map((item) => (
                <li key={item._id}>
                  <h3>{item.name}</h3>
                </li>
              ))}
            </ul>
          </div>
          asdfasdfasdf
        </Grid>
      </Container>
    </>
  );
}
