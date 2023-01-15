import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Movies } from './components/Movies';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
      {/* <Movies/> */}
    </div>
  );
}

export default App;
