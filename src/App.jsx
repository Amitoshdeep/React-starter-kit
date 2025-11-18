import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
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
