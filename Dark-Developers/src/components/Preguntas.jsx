import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export function Preguntas() {
  function reset() {
    //Listas
    let l1 = document.querySelector('#l1');
    let l2 = document.querySelector('#l2');
    let l3 = document.querySelector('#l3');
    let l4 = document.querySelector('#l4');
    let l5 = document.querySelector('#l5');
    //Flechas
    let f1 = document.querySelector('#f1');
    let f2 = document.querySelector('#f2');
    let f3 = document.querySelector('#f3');
    let f4 = document.querySelector('#f4');
    let f5 = document.querySelector('#f5');

    l1.classList.add('hidden');
    l2.classList.add('hidden');
    l3.classList.add('hidden');
    l4.classList.add('hidden');
    l5.classList.add('hidden');
    f1.classList.add('rotate-0');
    f2.classList.add('rotate-0');
    f3.classList.add('rotate-0');
    f4.classList.add('rotate-0');
    f5.classList.add('rotate-0');
  }

  var history = '';

  function dropdown(li, row) {
    if (history == li) {
      reset();
      history = '';
      return;
    }
    reset();
    let obj = document.querySelector(li);
    let obj2 = document.querySelector(row);
    obj.classList.remove('hidden');
    obj2.classList.remove('rotate-0');
    obj2.classList.add('rotate-180');
    history = li;
  }

  return (
    <div className='bg-dark-nav w-full py-14'>
      <h2 className='text-4xl font-bold text-center mb-8 text-slate-200'>Preguntas Frecuentes</h2>
      <div className='container w-[85%] mx-auto border-2 border-purple-g p-6 rounded-lg text-3xl text-slate-400  duration-300'>
        <ul>
          <li
            onClick={() => {
              dropdown('#l1', '#f1');
            }}
            className='cursor-pointer hover:text-slate-200 duration-300 py-2 px-4 border-b-2 border-purple-g'
          >
            <div className='flex justify-between items-center'>
              <h2 className='mb-2 p-2'>¿Que puedo ganar en mi primer curso online?</h2>
              <FontAwesomeIcon icon={faArrowDown} className='text-purple-g duration-300' id='f1' />
            </div>
            <p id='l1' className='text-2xl hidden p-3'>
              Automaticamente al inscribirte en nuestros cursos por primera vez recibes benficios de descuentos y algunas clases gratis de otros
              cursos con el fin de que explores tus conocimientos
            </p>
          </li>
          <li
            onClick={() => {
              dropdown('#l2', '#f2');
            }}
            className='cursor-pointer hover:text-slate-200 duration-300 py-2 px-4 border-b-2 border-purple-g'
          >
            <div className='flex justify-between items-center'>
              <h2 className='mb-2 p-2'>¿Cuales son los cursos relacionados a backend?</h2>
              <FontAwesomeIcon icon={faArrowDown} className='text-purple-g duration-300' id='f2' />
            </div>
            <p id='l2' className='text-2xl hidden p-3'>
              En nuestra seccion de cursos podras ver los distintos cursos existentes, tambien podras ubicar en la parte inferior a la rama que
              pertenecen
            </p>
          </li>
          <li
            onClick={() => {
              dropdown('#l3', '#f3');
            }}
            className='cursor-pointer hover:text-slate-200 duration-300 py-2 px-4 border-b-2 border-purple-g'
          >
            <div className='flex justify-between items-center'>
              <h2 className='mb-2 p-2'>¿Puedo formar parte de su equipo de trabajo?</h2>
              <FontAwesomeIcon icon={faArrowDown} className='text-purple-g duration-300' id='f3' />
            </div>
            <p id='l3' className='text-2xl hidden p-3'>
              Por supuesto que si!, en nuestra seccion de contactos podras encontrar distintas maneras de hacernos llegar tu portafoleo de
              desarrollador
            </p>
          </li>
          <li
            onClick={() => {
              dropdown('#l4', '#f4');
            }}
            className='cursor-pointer hover:text-slate-200 duration-300 py-2 px-4 border-b-2 border-purple-g'
          >
            <div className='flex justify-between items-center'>
              <h2 className='mb-2 p-2'>¿Podre crear mis paginas web a traves de estas cursos?</h2>
              <FontAwesomeIcon icon={faArrowDown} className='text-purple-g duration-300' id='f4' />
            </div>
            <p id='l4' className='text-2xl hidden p-3'>
              Gracias a los cursos que tomes te garantizamos que en un plazo de meses podras estar generando tus sitios web de manera profesional
            </p>
          </li>
          <li
            onClick={() => {
              dropdown('#l5', '#f5');
            }}
            className='cursor-pointer hover:text-slate-200 duration-300 py-2 px-4 border-b-2 border-purple-g'
          >
            <div className='flex justify-between items-center'>
              <h2 className='mb-2 p-2'>¿Con que material cuentan los cursos de programacion?</h2>
              <FontAwesomeIcon icon={faArrowDown} className='text-purple-g duration-300' id='f5' />
            </div>
            <p id='l5' className='text-2xl hidden p-3'>
              En nuestros cursos hay disponible una gran variedad de material, desde videos explicativos hasta documentos PDF que serviran para tu
              formacion profesional como desarrollador
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
