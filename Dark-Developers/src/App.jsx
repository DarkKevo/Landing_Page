import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Inicio } from './pages/Inicio';
import { Cards } from './components/Cards';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </div>
  );
};

export default App;
