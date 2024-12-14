import * as React from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

const PrivateRoutes = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  console.log(loggedInUser);

  return loggedInUser ? <Outlet /> : <Navigate to='/signin' />;
};

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
        lightWhite: '#F5F3FA',
        white: 'white',
        darkWhite: '#EDE9F1 ',
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
              element={<SignIn theme={abAnjTheme}></SignIn>}
            />
            <Route element={<PrivateRoutes />}>
              {/* // element={<SignIn theme={abAnjTheme} />} */}
              {/* /> */}
              <Route
                exact
                path='/'
                // element={<Home />}
                element={<Home theme={abAnjTheme} />}
              />
              {/* <Route
              exact
              path='/wedding'
              element={<Wedding />}
              // element={<Wedding theme={abAnjTheme} />}
            /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
