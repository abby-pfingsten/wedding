import Header from '../components/Header';
import { ThemeProvider } from '@mui/material/styles';

export default function Wedding({ theme }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header theme={theme}> </Header>
        hifasdfkas;df
      </ThemeProvider>
    </>
  );
}
