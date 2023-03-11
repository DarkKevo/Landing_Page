import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Swal from 'sweetalert2';

export function Oferta() {
  const [b, sb] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  function ButtonHandler() {
    let i = document.querySelector('#slider');
    if (b === false) {
      i.classList.add('ml-[-106%]');
      sb(true);
    } else {
      i.classList.remove('ml-[-106%]');
      sb(false);
    }
  }

  function Handler(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        nombre: nombre,
        correo: correo,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Te has registrado Exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
    setCorreo('');
    setNombre('');
    setPassword('');
  }

  return (
    <div id='oferta' className='bg-blue-dark py-14 flex items-center justify-center'>
      <div className='w-[85%] overflow-hidden p-8 rounded-xl bg-gradient-to-t from-dark-nav to-purple-900'>
        <div id='slider' className='w-[200%] duration-700 flex justify-evenly'>
          {/* item-1 */}
          <div
            id='item-1'
            className='text-center sm:text-start p-7 duration-700 w-[52%] flex flex-col items-center justify-center md:justify-between lg:flex-row md:flex-row '
          >
            <div className='w-[100%] md:w-[48%]'>
              <h2 className='text-3xl md:text-4xl text-white font-bold animate-bounce mb-12'>Tu Primer Curso!</h2>
              <p className='text-xl md:text-2xl text-slate-200 font-semibold'>
                Adquiere tu primer curso con un increible descuento por ser un nuevo cliente, registrate para obtener obtener los benecifios y formar
                parte de nuestro grupo
              </p>
              <span>
                <FontAwesomeIcon
                  onClick={ButtonHandler}
                  id='derecha'
                  className='p-4 text-3xl mt-14 animate-pulse bg-white rounded-full'
                  icon={faArrowRight}
                />
              </span>
            </div>
            <img className='w-[100%] md:w-[48%] h-40 mt-8 object-contain sm:mt-0 md:h-64 lg:h-96' src='src/assets/pngwing.com (2).png' />
          </div>
          {/* item-2 */}
          <div id='item-2' className='text-center sm:text-start p-7 w-[45%] flex flex-col items-center justify-between lg:flex-row md:flex-row  '>
            <div className='w-[100%] md:w-[48%]'>
              <div>
                <h2 className='text-3xl md:text-4xl text-white font-bold animate-bounce mb-8'>Ingresa!</h2>
                <p className='text-xl md:text-2xl text-slate-200 font-semibold mb-8'>
                  Forma parte de esta gran familia y aprende con nosotros tu primeros pasos, esperamos ver tu primer...
                </p>
              </div>
              {/* Modulo Code */}
              <div className='bg-code-base py-3 md:py-5 mb-5 md:mb-0 rounded-md'>
                <div className='bg-dark-nav w-full flex items-center p-2'>
                  <div className='bg-slate-700 px-3 py-1 rounded-xl'>
                    <button className='mr-2 text-slate-300'>FirstStep.js</button>
                    <span>
                      <FontAwesomeIcon className='text-[10px] text-slate-300 bg-purple-g rounded-full p-[2px]' icon={faX} />
                    </span>
                  </div>
                </div>
                <div className='flex p-1 sm:p-2 text-slate-400'>
                  <div className='p-2 flex text-purple-g'>
                    <span className='mr-2'>1 |</span>
                    <Typewriter
                      options={{
                        strings: ['console.log("Hello world!");', 'alert("Hello world!");', 'Swal("Hello")'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] flex justify-center'>
              <div className='w-[150%] sm:w-[95%]'>
                <form onSubmit={Handler} className='bg-dark-nav shadow-md rounded px-3 pt-2 pb-3 md:px-8 md:pt-6 md:pb-8 mb-4'>
                  <div className='mb-3'>
                    <div className='mb-4'>
                      <label className='block text-slate-200 text-xs md:text-sm font-bold mb-2' htmlFor='password'>
                        Nombre Completo
                      </label>
                      <input
                        required
                        className='shadow appearance-none border rounded w-full py-1 px-1 md:py-2 md:px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                        id='username'
                        type='text'
                        value={nombre}
                        placeholder='Nombre'
                        onChange={(e) => {
                          setNombre(e.target.value);
                        }}
                      />
                    </div>
                    <label className='block text-slate-200 text-xs md:text-sm font-bold mb-2' htmlFor='usuario'>
                      Correo Electronico
                    </label>
                    <input
                      required
                      className='shadow appearance-none border rounded w-full py-1 px-1 md:py-2 md:px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='Username'
                      value={correo}
                      onChange={(e) => {
                        setCorreo(e.target.value);
                      }}
                    />
                  </div>
                  <div className='mb-5'>
                    <label className='block text-slate-200 text-xs md:text-sm font-bold mb-2' htmlFor='password'>
                      Contraseña
                    </label>
                    <input
                      required
                      className='shadow appearance-none border rounded w-full py-1 px-1 md:py-2 md:px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className='flex items-center justify-between'>
                    <button
                      className='bg-blue-500 text-xs sm:text-base hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline'
                      type='submit'
                    >
                      Registrarse
                    </button>
                    <span onClick={ButtonHandler} className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                      Regresar
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
