import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function Navbar() {
  const [menu, set] = useState(false);

  function Menu(e) {
    if (menu === false) {
      let list = document.querySelector('ul');
      list.classList.add('top-[60px]');
      list.classList.add('opacity-100');
      set(true);
    } else {
      let list = document.querySelector('ul');
      list.classList.remove('top-[60px]');
      list.classList.add('opacity-100');
      set(false);
    }
  }

  if (menu === false) {
    return (
      <div>
        <nav className='px-6 py-3 bg-dark-nav border-b-4 border-purple-g md:flex md:items-center md:justify-between'>
          <div className='flex justify-between items-center'>
            <span className='cursor-pointer'>
              <img className='h-9 inline' src='src/assets/dark.png' />
            </span>
            <span className='text-slate-500 hover:text-white duration-75 md:hidden text-2xl mx-2 cursor-pointer block'>
              <FontAwesomeIcon onClick={Menu} icon={faBars} />
            </span>
          </div>
          <ul className='md:flex md:items-center text-slate-500 z-[-1] md:w-auto md:z-auto md:static absolute bg-dark-nav w-full left-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Inicio</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Categorias</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Redes</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Contactos</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  } else {
    return (
      <div>
        <nav className='px-6 py-3 bg-dark-nav border-b-4 border-purple-g md:flex md:items-center md:justify-between'>
          <div className='flex justify-between items-center'>
            <span className='cursor-pointer'>
              <img className='h-9 inline' src='src/assets/dark.png' />
            </span>
            <span className='text-slate-500 hover:text-white duration-75 md:hidden text-2xl mx-2 cursor-pointer block'>
              <FontAwesomeIcon onClick={Menu} icon={faX} />
            </span>
          </div>
          <ul className='md:flex md:items-center text-slate-500 z-[-1] md:w-auto md:z-auto md:static absolute bg-dark-nav w-full left-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Inicio</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Categorias</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Redes</a>
            </li>
            <li className='mx-4 py-3 px-4 my-6 md:my-0 border-b-4 border-dark-nav hover:border-purple-g duration-75 hover:text-white'>
              <a href='#'>Contactos</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
}
