import { useContext } from 'react';
import { data } from '../data/data';
import { dataContext } from '../context/context';

export function Card() {
  const { setI, setM } = useContext(dataContext);
  return (
    <div className='w-full flex flex-col items-center justify-center bg-blue-dark'>
      <div className='grid grid-cols-1 gap-8 w-full p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {data.map((i, index) => (
          <div
            key={index}
            className='max-w-md duration-300 hover:bg-dark-nav-500 rounded overflow-hidden shadow-lg bg-dark-nav flex flex-col items-start justify-between'
          >
            <div className='w-full bg-white h-[10rem]'>
              <img className='w-full h-full object-cover' src={i.src} />
            </div>
            <div className='px-3 py-3'>
              <div className='font-bold text-lg mb-3 text-white'>{i.nombre}</div>
              <p className='text-slate-300 text-sm'>{i.descripcion}</p>
            </div>
            <div className='px-3 pt-2 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-1 mb-3'>{i.type}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setI(2);
          setM(2);
        }}
        className='w-[95%] py-3 mb-5 text-xl sm:text-2xl text-slate-500 hover:text-slate-200 rounded-lg hover:bg-purple-900 duration-500 bg-dark-nav-500'
      >
        Ver mas Cursos
      </button>
    </div>
  );
}
