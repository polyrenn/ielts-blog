import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo/Ielts-Advantage-Logo-W-Background-Orange.jpg'


export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="border-t border-accent-2 py-8 mt-6">
      <Container>
      <Link className='block w-max' href="/">
        <Image
            priority
            src={Logo}
            alt='logo'
            className='w-14'
          />
        </Link>

        <div className="py-4">
          <div className='branding'>
          </div>

          <div className='footer-items grid grid-cols-2 md:grid-cols-3'>
              <div className='flex flex-col'>
                <h4 href="/speaking" className='font-medium'>
                      Module Sitemap
                </h4>
              <Link className='underline mb-1 w-max' href="/speaking">
                Speaking
              </Link>

              <Link className='underline mb-1 w-max' href="/reading">
                Reading
              </Link>

              <Link className='underline mb-1 w-max' href="/writing">
                Writing
              </Link>
              </div>

              <div className='flex flex-col flex-wrap'>
                <h4 className='font-medium'>
                     Contact Info
                </h4>
                <div className='mb-1'>
                <a href="mailto: getieltssolution@gmail.com" className='break-all w-max border-b border-accent-2'>getieltssolution@gmail.com</a>
                </div>
               
                <p className='mb-1'>+234(81)21519639</p>
              </div>

              <div className=''>
                <Link href="/speaking" className='font-medium'>
                      Speaking
              </Link>
              </div>
          </div>
        </div>

        <div className='footer-meta border-t border-accent-2 flex flex-row justify-between'>
          <div>
          <p>© {date}</p>
          </div>
       
        <div className='flex flex-row justify-between'>
          
          </div>
        </div>
      </Container>
    </footer>
  )
}
