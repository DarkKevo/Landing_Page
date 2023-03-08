import { Red } from './red';

export function Redes() {
  return (
    <div className='py-14 bg-blue-dark flex items-center justify-center'>
      <div className='w-[85%] p-12 bg-gradient-to-t from-dark-nav to-purple-900 rounded-xl'>
        <div className='animate-bounce'>
          <h2 className='mb-7 text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-pink-600 animate-pulse font-bold text-lg sm:text-4xl'>
            Siguenos en Nuestras Redes
          </h2>
        </div>
        <p className='text-lg sm:text-2xl text-slate-200 mb-8'>
          Siguenos en nuestras redes sociales y no te pierdas de ninguna novedad en nuestras plataforma, te esperamos!
        </p>
        <Red />
      </div>
    </div>
  );
}
