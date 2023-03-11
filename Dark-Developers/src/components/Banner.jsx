import Typewriter from 'typewriter-effect';

export function Banner() {
  return (
    <div id='banner' className='bg-dark-nav py-8 w-full flex items-center justify-center'>
      <div className='mt-20 container mx-8 w-full flex flex-col lg:flex-row items-center justify-between p-5 sm:p-8 text-slate-300 border-2 border-gray-g rounded-md'>
        <div className='w-full text-center mb-11 sm:mb-11 lg:w-[48%] lg:mb-0 lg:text-start'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-purple-g animate-pulse'>
            Dark-Developers
          </h2>
          <div className='flex items-center justify-center lg:justify-start text-xl sm:text-3xl font-semibold mb-5 sm:mb-6'>
            <p className='mr-2'>Somos</p>
            <span className='text-purple-g'>
              <Typewriter
                options={{
                  strings: ['Tu Solucion', 'Tu Mejor Opcion', 'Tu Educacion'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className='text-base sm:text-2xl mb-3'>
            Dark-Developers es una empresa dedicada a impartir el conocimiento en los distintos lenguajes de programacion existentes, con el objetivo
            de que tu mismo adquieras las herramientas necesarias para desarrollar tu blog o pagina web.
          </p>
          <p className='text-base sm:text-2xl'>
            Explora entre nuestros diferentes cursos y encuentra el indicado, ¿Que esperas para ser un desarrolador web?
          </p>
        </div>
        <div className='w-full text-center lg:w-[48%] lg:text-start'>
          <iframe
            className='w-full aspect-video rounded-lg'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/lWQ69WX7-hA'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
