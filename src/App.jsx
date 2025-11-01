import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div
      data-scroll-container
      className='mainDiv
      '
    >
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
