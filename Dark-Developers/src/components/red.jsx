import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram, faBlogger, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

export function Red() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5'>
      <div className='bg-clip-padding bg-gradient-to-tl from-blue-800 to-indigo-800 animate-pulse h-28 cursor-pointer rounded-lg flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faDiscord} className='text-slate-200 duration-200 hover:text-6xl text-5xl' id='f1' />
      </div>
      <div className='bg-clip-padding bg-gradient-to-tl from-pink-600 to-purple-700 animate-pulse h-28 cursor-pointer rounded-lg flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faInstagram} className='text-slate-200 duration-200 hover:text-6xl text-5xl' id='f1' />
      </div>
      <div className='bg-clip-padding bg-gradient-to-tl from-orange-600 to-red-500 animate-pulse h-28 cursor-pointer rounded-lg flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faBlogger} className='text-slate-200 duration-200 hover:text-6xl text-5xl' id='f1' />
      </div>
      <div className='bg-clip-padding bg-gradient-to-tl from-red-500 to-red-800 animate-pulse h-28 cursor-pointer rounded-lg flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faYoutube} className='text-slate-200 duration-200 hover:text-6xl text-5xl' id='f1' />
      </div>
      <div className='bg-clip-padding bg-gradient-to-tl from-blue-500 to-indigo-800 animate-pulse h-28 cursor-pointer rounded-lg flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faTelegram} className='text-slate-200 duration-200 hover:text-6xl text-5xl' id='f1' />
      </div>
    </div>
  );
}
