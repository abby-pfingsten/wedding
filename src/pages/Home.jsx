import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';

export default function Home({ theme }) {
  //   const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} />
      hi
    </ThemeProvider>
  );
}
