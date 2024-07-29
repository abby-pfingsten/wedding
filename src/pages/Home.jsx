import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Wedding from '../pages/Wedding';

export default function Home({ theme }) {
  //   const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wedding theme={theme} />
      hi
    </ThemeProvider>
  );
}
