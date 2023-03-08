import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';

export function Contacto() {
  return (
    <div className='bg-dark-nav w-full py-14 flex items-center justify-center'>
      <div className='w-[85%] bg-dark-nav-500 rounded-lg text-slate-200 flex flex-col sm:flex-row'>
        <div className='w-[100%] sm:w-[50%]'>
          <img src='src/assets/dark.jpg' className='w-full object-cover h-full rounded-tl-lg rounded-bl-lg' />
        </div>
        <div className='w-[100%] sm:w-[50%] p-10'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>Contactanos</h2>
          <p className='text-lg sm:text-xl'>
            Siempre estamos buscando nuevos desarrolladores, unete a nuestra gran familia de developers y crea grandes proyectos junto a nosotros!
          </p>
          <ul className='text-base md:text-lg mt-10'>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='text-slate-200' />
              <p className='ml-2'>dark_developers@uvm.edu.ve</p>
            </li>
            <li className='flex items-center mt-1'>
              <FontAwesomeIcon icon={faPhone} className='text-slate-200' />
              <p className='ml-2'>+58 4263400229</p>
            </li>
            <li className='flex items-center mt-1'>
              <FontAwesomeIcon icon={faMapLocation} className='text-slate-200' />
              <p className='ml-2'>Universidad Valle de Momboy, Carvajal Edo Trujillo</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
