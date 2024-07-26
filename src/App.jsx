import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

// import { useState } from 'react'

function App() {
  const abAnjTheme = createTheme({
    palette: {
      primary: {
        main: '#bca0d3',
        // #12a903
      },
      secondary: {
        main: '#16a085',
        blue: '#87ceeb',
      },
      whites: {
        lightWhite: '#F8F5FC',
        white: 'white',
        darkWhite: '#F8F8FF',
      },
    },
    typography: {
      fontFamily: 'Playfair Display',
    },
  });

  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={abAnjTheme}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path='/signin'
              element={<SignIn theme={abAnjTheme} />}
            />
            <Route exact path='/' element={<Home theme={abAnjTheme} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
