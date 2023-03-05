import Typewriter from 'typewriter-effect';

export function Banner() {
  return (
    <div className='bg-dark-nav py-6 absolute z-[-2] w-full'>
      <div className='container w-full flex flex-col lg:flex-row items-center justify-between p-8 text-slate-300 border-2 border-gray-g mx-auto my-auto rounded-md'>
        <div className='w-full text-center mb-11 lg:w-[48%] lg:text-start'>
          <h2 className='text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-purple-g animate-pulse'>
            Dark-Developers
          </h2>
          <div className='flex items-center justify-center lg:justify-start text-3xl mb-10'>
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
          <p className='text-2xl'>
            Dark-Developers es una empresa dedicada a impartir el conocimiento en los distintos lenguajes de programacion existentes, con el objetivo
            de que tu mismo adquieras las herramientas necesarias para desarrollar tu blog o pagina web.
          </p>
        </div>
        <div className='w-full text-center lg:w-[48%] lg:text-start'>
          <iframe
            className='w-full aspect-video rounded-lg'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/lWQ69WX7-hA'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
