import { data } from '../data/data';

export function Card() {
  return (
    <div className='w-full flex items-center justify-center bg-blue-dark'>
      <div className='grid grid-cols-1 gap-8 w-full p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {data.map((i) => (
          <div class='max-w-md duration-300 hover:bg-dark-nav-500 rounded overflow-hidden shadow-lg bg-dark-nav flex flex-col items-start justify-between'>
            <div className='w-full bg-white h-[12rem]'>
              <img class='w-full h-full object-cover' src={i.src} />
            </div>
            <div class='px-4 py-4'>
              <div class='font-bold text-xl mb-4 text-white'>{i.nombre}</div>
              <p class='text-slate-300 text-md'>{i.descripcion}</p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2'>{i.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
