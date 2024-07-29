import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Wedding from '../pages/Wedding';
import FAQ from '../pages/FAQ';

export default function Home({ theme }) {
  //   const defaultTheme = createTheme();

//   const scrollToSection = (sectionId) => {
//     const sectionElement = document.getElementById(sectionId);
//     const offset = 128;
//     if (sectionElement) {
//       const targetScroll = sectionElement.offsetTop - offset;
//       sectionElement.scrollIntoView({ behavior: 'smooth' });
//       window.scrollTo({
//         top: targetScroll,
//         behavior: 'smooth',
//       });
//     //   setOpen(false);
//     }
//   };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Wedding />
      <FAQ />
    </ThemeProvider>
  );
}
