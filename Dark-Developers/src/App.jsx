import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;