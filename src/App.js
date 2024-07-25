import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
// import ElementSelection from './pages/ElementSelection';
import Home from './pages/Home';

// import { useState } from 'react'

function App() {
  // const [isMobile, setIsMobile] = useState(false)

  // const changeToMobile = () => {
  //   if (window.innerWidth <= 960) {
  //     setIsMobile(true)
  //   } else {
  //     setIsMobile(false)
  //   }
  // }

  return (
    <div className='App'>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
