import { data } from '../data/data';

export function Card() {
  return (
    <div className='w-full flex items-center justify-center bg-blue-dark'>
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
    </div>
  );
}
