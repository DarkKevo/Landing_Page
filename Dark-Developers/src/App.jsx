import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Inicio } from './pages/Inicio';
import { Cursos } from './pages/Cursos';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Cursos' element={<Cursos />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
