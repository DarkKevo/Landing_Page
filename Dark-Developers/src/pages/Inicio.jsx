import { Banner } from '../components/Banner';
import { Cards } from '../components/Cards';
import { Oferta } from '../components/Oferta';
import { Preguntas } from '../components/Preguntas';
import { Redes } from '../components/Redes';

export function Inicio() {
  return (
    <div className=''>
      <Banner />
      <Cards />
      <Oferta />
      <Preguntas />
      <Redes />
    </div>
  );
}
