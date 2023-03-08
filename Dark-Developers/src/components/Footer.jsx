import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faBlogger, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <div className='bg-dark-nav border-t-4 border-purple-g px-8 py-4 text-xs sm:text-lg text-slate-400 flex items-center justify-between'>
      <div className='w-[55%]'>
        <p>© 2023 Darkkevo, Inc. All rights reserved.</p>
      </div>
      <div className='w-[30%] flex items-center justify-evenly'>
        <FontAwesomeIcon icon={faDiscord} className='hover:text-slate-200 duration-300' id='f1' />
        <FontAwesomeIcon icon={faInstagram} className='hover:text-slate-200 duration-300' id='f1' />
        <FontAwesomeIcon icon={faBlogger} className='hover:text-slate-200 duration-300' id='f1' />
        <FontAwesomeIcon icon={faYoutube} className='hover:text-slate-200 duration-300' id='f1' />
        <FontAwesomeIcon icon={faTelegram} className='hover:text-slate-200 duration-300' id='f1' />
      </div>
    </div>
  );
}
