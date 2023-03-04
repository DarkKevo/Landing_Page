import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Inicio } from './pages/Inicio';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
