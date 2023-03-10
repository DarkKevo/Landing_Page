import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Oferta } from './components/Oferta';
import { Preguntas } from './components/Preguntas';
import { Redes } from './components/Redes';
import { Contacto } from './components/contacto';
import { Cursos } from './pages/Cursos';
import { useContext } from 'react';
import { dataContext } from './context/context';

const App = () => {
  const { index } = useContext(dataContext);

  if (index == 1) {
    return (
      <div className='App'>
        <Navbar />
        <Banner />
        <Cards />
        <Oferta id='oferta' />
        <Preguntas />
        <Redes />
        <Contacto />
        <Footer />
      </div>
    );
  }

  if (index == 2) {
    return (
      <div className='App'>
        <Navbar />
        <Cursos />
        <Footer />
      </div>
    );
  }

  if (index != 1 && index != 2) {
    return (
      <div className='App text-center text-slate-200 font-bold flex justify-center items-center w-full h-[100vh] bg-dark-nav'>
        <h1 className='text-2xl sm:text-5xl'>Error: Page not Found</h1>
      </div>
    );
  }
};

export default App;
