import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import CrossIcon from '../assets/fi-rr-cross.svg'
import NavIcon from '../assets/menu-burger.svg'
import Logo from '../assets/logo/Ielts-Advantage-Logo-W-Background-Orange.jpg'
import { useState } from 'react';

export default function Navigation({ preview }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isOpen, setIsOpen] = useState(false)


  const navStyles = {

  }

  return (
    <div className='border-b border-accent-2'>
    <Container>
      <div className="flex flex-row justify-between items-center py-2">
      <div className="py-2 md:text-md font-medium font-manrope tracking-tighter leading-tight">
        <Link href="/">
        <Image
            priority
            src={Logo}
            alt='logo'
            className='w-14'
          />
        </Link>
        </div>
        <div className={`fixed px-8 pt-2 top-0 left-0 h-full w-full bg-white md:relative md:pt-0 md:h-auto md:w-auto md:block ${isOpen ? 'block' : 'hidden'}`}>

        <div  onClick={() => setIsOpen(!isOpen)} className='flex justify-center md:hidden'>
          <div className='flex justify-center items-center bg-slate-950 rounded-full w-12 h-12'>
          <svg fill='#fff' className='w-4 h-4' id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>180 cross</title><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
          </div>

       
        </div>
        <p className=' text-sm text-slate-700 md:hidden'>MENU</p>
          <ul className='flex h-4/5 flex-col md:flex-row md:h-auto'>
            <Link href="/speaking" 
                className={currentRoute === "/speaking" 
                  ? "text-slate-500 md:bg-slate-100 md:p-1 md:px-4 rounded hyper-page" 
                  : "hyper-page"}>
                    Speaking
            </Link>
            <Link href="/reading" 
                className={currentRoute === "/reading" 
                  ? "text-slate-500 md:bg-slate-100 p-1 px-4 rounded hyper-page" 
                  : "hyper-page"}>
                    Reading
            </Link>
            <Link href="/writing" 
                className={currentRoute === "/writing" 
                  ? "text-slate-500 md:bg-slate-100 p-1 px-4 rounded hyper-page" 
                  : "hyper-page"}>
                    Writing
            </Link>
          </ul>
        </div>
        <Image
            alt='svg-icon'
            className={`w-6 h-6 md:hidden`}
            src={NavIcon}
            onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </Container>
    </div>
  )
}
