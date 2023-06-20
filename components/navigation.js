import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navigation({ preview }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Container>
      <div className='flex flex-row justify-between items-center py-4'>
      <div className="py-2 md:text-md font-medium font-manrope tracking-tighter leading-tight">
         <h4>IELTS SOLUTIONS</h4>
        </div>
        <div>
          <ul className='flex flex-row'>
            <Link href="/speaking" 
                className={currentRoute === "/speaking" 
                  ? "text-slate-500 bg-slate-100 p-1 px-4 rounded hyper-page" 
                  : "non-active-class-name"}>
                    Speaking
            </Link>
            <Link href="/reading" 
                className={currentRoute === "/reading" 
                  ? "text-slate-500 bg-slate-100 p-1 px-4 rounded hyper-page" 
                  : "hyper-page"}>
                    Reading
            </Link>
            <Link href="/writing" 
                className={currentRoute === "/writing" 
                  ? "text-slate-500 bg-slate-100 p-1 px-4 rounded hyper-page" 
                  : "hyper-page"}>
                    Writing
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  )
}
